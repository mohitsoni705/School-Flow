import mongoose from "mongoose";

const adminSchema  = new mongoose.Schema({
    username:String,
    password:String
})
export const adminModel = mongoose.model("admin",adminSchema);
