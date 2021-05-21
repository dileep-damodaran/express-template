
import * as express from 'express';
import { AuthenticationHandler } from './authenticationHandler';
import { CustomResponseHandler } from './customResponseHandler';
import { ExceptionHandler } from './exceptionHandlerMiddleWare';
import { ExpressHandler } from './expressHandler';
import { ExpressLogHandler } from './expressLogHandler';
import { RouteHandler } from './routeHandler';

export class MiddleWareConfig{


    private _app : express.Application;

    constructor() {

        this._app = express();
    }

    public configure(publicKey:string):express.Application{

        ExpressHandler.load(this._app);

        ExpressLogHandler.configure(this._app);

        AuthenticationHandler.configure(this._app, publicKey);

        CustomResponseHandler.configure(this._app);

        RouteHandler.configure(this._app);

        ExceptionHandler.configure(this._app);

        return this._app;
    }
}