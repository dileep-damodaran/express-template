

import * as express from "express";
import asyncMiddleWare from "../../middleWares/asyncMiddleWare";
import { AuthenticationService } from "../../services/authenticationService";


export class AccountController{

    public static routes(app:express.Application):any{

        let router = express.Router();

        router.get('/login', asyncMiddleWare(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const authResult = AuthenticationService.authenticate('','');
            res.status(200).send(authResult);
        }));

        router.get('/', asyncMiddleWare(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            
            res.status(200).send('success');
        }));

        

        return router;
        
    }
}