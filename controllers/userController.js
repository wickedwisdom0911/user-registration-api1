// controllers/userController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { mobile, password } = req.body;
    let image = '';

    try {
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        if (req.file) {
            image = req.file.path;
        }

        const user = new User({ mobile, password, image });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserDetails = async (req, res) => {
    res.json(req.user);
};

module.exports = { registerUser, getUserDetails };
