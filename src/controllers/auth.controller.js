/*this page has the functions of the endpoints for controlling the user data */

import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    const { email, username, password } = req.body;
    try {

        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json({ message: "the email already is use" });

        const passwordHash = await bcrypt.hash(password, 8);
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        console.log("tokem: :::",token);
        res.cookies('token', token);

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            password: userSaved.password,
            createAt: userSaved.createAt,
            updateAt: userSaved.updateAt
        })

    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "The email not exist"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "The password is not match"});

        const token = await createAccessToken({ id: userFound._id })
        console.log("token:", token);
        res.cookies('token', token)

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        });

    } catch (error) {
        res.status(500).json({ message: "error"});
    }


}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    });
    res.status(200).json('The user is logout');
}

export const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.body._id);
        if (!userFound) res.status(400).json('user not found');

        return res.status(200).json(userFound);
    } catch (error) {
        res.status(500).json({message: "user not found"});
    }
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {

        if (error) return res.status(401).json({ message: "Unauthorized" });

        try {
            const userFound = await User.findById(user.id);
            if (!userFound) return res.json(401).json({ message: "Unauthorized" });

            return res.json({
                username: userFound.username,
                email: userFound.email,
                id: userFound._id
            })
        } catch (error) {
            console.log(error);
        }
    })
}

export const getUsers = async()=>{
    try {
        const usersFound = await User.find();
        return usersFound;
    } catch (error) {
        console.log('error the users not found');
    }
}