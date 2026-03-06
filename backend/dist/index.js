import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import jwt from "jsonwebtoken";
import { studentModel } from "./schema/student.js";
import { teacherModel } from "./schema/teacher.js";
import { adminModel } from "./schema/admin.js";
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.post(("/student/signup"), async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await studentModel.findOne({ username });
    if (existingUser) {
        res.status(411).json({
            message: "user already exist"
        });
    }
    else {
        studentModel.create({ username, password });
        res.json({
            message: "user created"
        });
    }
});
app.post(("/student/login"), async (req, res) => {
    const { username, password } = req.body;
    const checkUser = await studentModel.findOne({ username, password });
    if (checkUser) {
        const token = jwt.sign({ username }, "shh");
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "inavlid username or password"
        });
    }
});
app.post(("/teacher/login"), async (req, res) => {
    const { username, password } = req.body;
    const checkUser = await teacherModel.findOne({ username, password });
    if (checkUser) {
        const token = jwt.sign({ username }, "shh");
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "inavlid username or password"
        });
    }
});
app.post(("/admin/login"), async (req, res) => {
    const { username, password } = req.body;
    const checkUser = await adminModel.findOne({ username, password });
    if (checkUser) {
        const token = jwt.sign({ username }, "shh");
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "inavlid username or password"
        });
    }
});
app.post(("/teacher/signup"), async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await teacherModel.findOne({ username });
    if (existingUser) {
        res.status(411).json({
            message: "user already exist"
        });
    }
    else {
        teacherModel.create({ username, password });
        res.json({
            message: "user has been created"
        });
    }
});
app.post(("/admin/signup"), (req, res) => {
    const { username, password } = req.body;
    const existingUser = adminModel.find({ username });
    if (!existingUser) {
        adminModel.create({ username, password });
    }
    else {
        res.status(411).json({
            message: "user already exist"
        });
    }
});
app.listen(8000, () => {
    console.log("Server started on port 8000");
});
//# sourceMappingURL=index.js.map