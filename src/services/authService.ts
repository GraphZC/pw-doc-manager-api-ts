import bcrypt from 'bcrypt';
import Prisma from "./prisma";
import jwt from 'jsonwebtoken';
import { JwtPayload } from '@/schema/jwtSchema';

const prisma = Prisma.client()

const findUserByUsername = async (username: string) => {
    const user = await prisma.employee.findUnique({
        where: {
            username,
        }
    });

    return user;
}

const isUserExist = async (username: string): Promise<boolean> => {
    const user = await findUserByUsername(username);
    return !!user;
};

const checkPassword = async (username: string, password: string): Promise<boolean> => {
    const user = await findUserByUsername(username);
    
    if (!user) {
        return false;
    }

    return bcrypt.compareSync(password, user.password);
};

const generateAccessToken = async (username: string): Promise<string> => {
    const user = await findUserByUsername(username);

    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }

    const token = jwt.sign(
        {
            username: user?.username,
            role: user?.role,
            name: user?.name,
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1h',
        }
    );
    
    return token;
};

const generateRefreshToken = async (username: string): Promise<string> => {
    const user = await findUserByUsername(username);

    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    const token = jwt.sign(
        {
            username: user?.username,
            role: user?.role,
            name: user?.name,
        }, 
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '7d',
        }
    );

    return token;
};

const decodeRefreshToken = async (token: string): Promise<JwtPayload> => {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    }) as unknown as JwtPayload;

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jwt.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded;
}

const decodeAccessToken = async (token: string): Promise<JwtPayload> => {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    }) as unknown as JwtPayload;
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jwt.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded as unknown as JwtPayload;
}

export default {
    findUserByUsername,
    isUserExist,
    checkPassword,
    generateAccessToken,
    generateRefreshToken,
    decodeRefreshToken,
    decodeAccessToken,
}