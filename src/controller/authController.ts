import { JWT_ACCESS_EXPIRE_TIME, JWT_REFRESH_EXPIRE_TIME } from '@/constant';
import auth from "@/services/authService";
import employeeService from "@/services/employeeService";
import type { Request, Response } from "express"
import { TokenExpiredError } from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    // Check user is exist
    const isExist = await auth.isUserExist(username);
    if (!isExist) {
        return res.status(401).json({
            message: 'Username is not exist',
        });
    }

    // Check password is correct
    const isPasswordCorrect = await auth.checkPassword(username, password);
    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: 'Username or password is not correct',
        });
    }

    // Generate access token and refresh token
    const accessToken = await auth.generateAccessToken(username);
    const refreshToken = await auth.generateRefreshToken(username);
    
    const info = await employeeService.findEmployeeByUsername(username);

    return res.status(200).json({
        id: info?.id,
        username: info?.username,
        name: info?.name,
        telephone: info?.telephone,
        role: info?.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenExpires: new Date(Date.now() + JWT_ACCESS_EXPIRE_TIME),
        refreshTokenExpires: new Date(Date.now() + JWT_REFRESH_EXPIRE_TIME),
    });
}

export const refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(403).json({
            message: "Authentication failed"
        })
    }

    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    try {
        const decoded = await auth.decodeRefreshToken(refreshToken)

        // Generate new access token
        const accessToken = await auth.generateAccessToken(decoded.username);
        const newRefreshToken = await auth.generateRefreshToken(decoded.username);

        const info = await employeeService.findEmployeeByUsername(decoded.username);

        return res.status(200).json({
            id: info?.id,
            username: info?.username,
            name: info?.name,
            telephone: info?.telephone,
            role: info?.role,
            accessToken: accessToken,
            refreshToken: newRefreshToken,
            accessTokenExpires: new Date(Date.now() + JWT_ACCESS_EXPIRE_TIME),
            refreshTokenExpires: new Date(Date.now() + JWT_REFRESH_EXPIRE_TIME),
        });
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(403).json({
                message: "Token is expired"
            });
        }
            
        return res.status(403).json({
            message: "Token is invalid"
        });
    }
}