import mongoose from "mongoose";

const userSchama = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    }
},{
    timestamps: true,
})

const User = mongoose.model("User", userSchama);

export default User;