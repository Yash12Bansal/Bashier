"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const payload = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
    try {
        if (payload) {
            //@ts-ignore
            req.id = payload.id;
            next();
        }
        else {
            return res.status(403).json({
                message: "Not logged in"
            });
        }
    }
    catch (e) {
        return res.status(403).json({
            message: "not  loged inn"
        });
    }
}
