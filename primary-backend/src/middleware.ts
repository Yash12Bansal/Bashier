import { NextFunction, Request, Response } from "express"
import { JWT_PASSWORD } from "./config";
import jwt from 'jsonwebtoken';

export function authMiddleware(req:Request, res:Response, next:NextFunction){
    const token=req.headers.authorization as unknown as string;
    const payload =jwt.verify(token, JWT_PASSWORD);
    try{
        if(payload){
            //@ts-ignore
            req.id=payload.id;
            next();
        }
        else{
            return res.status(403).json({
                message:"Not logged in"
            })    
        }
    }
    catch(e){
        return res.status(403).json({
            message:"not  loged inn"
        })
    }
}