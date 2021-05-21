import * as express from "express";
import * as bodyParser from "body-parser";
const boom = require('express-boom');

export class ExpressHandler{

    public static load(app: express.Application): express.Application {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(boom());
        
        return app;
    }
}