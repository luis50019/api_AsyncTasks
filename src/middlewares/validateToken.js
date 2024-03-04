//This document is responsible of validator token of the user
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const validateToken =  (req,res,next)=>{
    const { token } = req.cookies;
    console.log(token);
    if (!token) return res.status(401).json({menssage: "The token not exist"});

    jwt.verify(token,TOKEN_SECRET, (err,user)=>{
        if (err) return res.status(403).json({menssage: "Invalid token"});
        req.user = user;
        next();
    })
}

export default validateToken;