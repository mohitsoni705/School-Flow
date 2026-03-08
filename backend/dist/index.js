import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import jwt from "jsonwebtoken";
import { userModel } from "./schema/userSchema.js";
const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.post(("/student/signup"), async (req, res) => {
    const { username, password } = req.body;
    const user = {
        username: username,
        password: password,
        userType: "student"
    };
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
        res.status(411).json({
            message: "user already exist"
        });
    }
    else {
        userModel.create(user);
        res.json({
            message: "user created"
        });
    }
});
app.post(("/student/login"), async (req, res) => {
    const { username, password } = req.body;
    const checkUser = await userModel.findOne({ username, password });
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
    const checkUser = await userModel.findOne({ username, password });
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
    const checkUser = await userModel.findOne({ username, password });
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
    const existingUser = await userModel.findOne({ username });
    const user = {
        username: username,
        password: password,
        userType: "teacher"
    };
    if (existingUser) {
        res.status(411).json({
            message: "user already exist"
        });
    }
    else {
        userModel.create(user);
        res.json({
            message: "user has been created"
        });
    }
});
app.post(("/admin/signup"), async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await userModel.find({ username });
    const user = {
        username: username,
        password: password,
        userType: "admin"
    };
    if (!existingUser) {
        userModel.create(user);
        res.json({
            message: "user created"
        });
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