const express = require('express');
const { registerUser, getUserDetails } = require('../controllers/userController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const upload = require('../middlewares/uploadMiddleware.js')



const router = express.Router();


router.post('/register', upload.single('image'), registerUser);
router.get('/me', authMiddleware, getUserDetails);
module.exports = router;