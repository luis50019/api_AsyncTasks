//This document is responsible of validator token of the user
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const validateToken =  (req,res,next)=>{
    const { access_token } = req.cookies;
    if (!access_token)
      return res.status(401).json({ menssage: "The token not exist" });

    try {
        const data = jwt.verify(access_token, TOKEN_SECRET);
        req.user= data;
    } catch (error) {
        req.user = null;
        res.status(500);
    }
    
    next();
}

export default validateToken;