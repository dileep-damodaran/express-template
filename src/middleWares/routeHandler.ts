import * as express from 'express';
import { AccountController } from '../controllers/account/accountController';


export class RouteHandler{

    public static configure(app:express.Application):express.Application{

        app.use("/api/account", AccountController.routes(app));
        
        return app;
    }
}