import { Express } from "express";
import webRouter from "./web";
import apiRouter from "./v1/api";
import adminApiRouter from "./v1/admin-api";

const setUpRouter = (app: Express) => {
    app.use('/', webRouter());
    app.use('/api/v1', apiRouter());
    app.use('/api/v1/admin', adminApiRouter());
}

export default setUpRouter