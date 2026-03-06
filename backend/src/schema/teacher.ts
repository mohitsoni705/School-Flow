import mongoose from "mongoose";

const teacherSchema  = new mongoose.Schema({
    username:String,
    password:String
})
export const teacherModel = mongoose.model("teacher",teacherSchema);
