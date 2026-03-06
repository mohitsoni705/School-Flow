import mongoose from "mongoose";

const studentSchema  = new mongoose.Schema({
    username:String,
    password:String
})
export const studentModel = mongoose.model("student",studentSchema);
