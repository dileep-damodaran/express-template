

import * as express from "express";
import asyncMiddleWare from "../../middleWares/asyncMiddleWare";
import { AuthenticationService } from "../../services/authenticationService";
const boom = require("boom");


export class AccountController{

    public static routes(app:express.Application):any{

        let router = express.Router();

        router.post('/login', asyncMiddleWare(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

            const userName = req.body.user_name;
            const password = req.body.password;

            const authResult = await AuthenticationService.authenticate(userName, password);

            if(!authResult.authenticated)
                throw boom.unauthorized(authResult.error);

            res.status(200).send(authResult);

        }));

        router.get('/', asyncMiddleWare(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            
            res.status(200).send('success');
        }));

        

        return router;
        
    }
}