
import * as express from 'express';
import logger from './../helpers/logger';
const expressWinston = require('express-winston');

export class ExpressLogHandler{

    public static configure(app:express.Application): express.Application{

        app.use(expressWinston.logger({winstonInstance:logger}));
        return app;
    }
}