const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username:String,
    password:String
})

UserSchema.pre("save", async function (next) {
    console.log("middleware gets executed")
    const newPassword = await bcrypt.hash(this.password, 5)
    this.password = newPassword;
    console.log(this);
    next();
})

const User = mongoose.model("user", UserSchema)
module.exports = User;