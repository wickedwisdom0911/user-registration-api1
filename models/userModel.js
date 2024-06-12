
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");




const userSchema=new mongoose.Schema({


    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },




})


userSchema.pre('save', async function(next) {


if(!this.isModified('password'))
    {
        return next;
    }

    this.password=await bcrypt.hash(this.password, 10);

    next();




})



userSchema.methods.comparePassword=function(candidatesPassword){


    return bcrypt.compare(candidatesPassword, this.password)

}

const User = mongoose.model('User', userSchema);

module.exports = User;