import { Express } from "express";
import webRouter from "./web";
import apiRouter from "./v1/api";

const setUpRouter = (app: Express) => {
    app.use('/', webRouter());
    app.use('/api/v1', apiRouter());
}

export default setUpRouter