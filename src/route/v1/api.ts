import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, refreshToken } from "@/controller/authController";

const apiRouter = (): Router => {
    const api = Router();

    api.get('/', healthCheck);
    
    // Authentication
    api.post('/auth/login', login);
    api.post('/auth/refresh', refreshToken)

    return api;
}

export default apiRouter;