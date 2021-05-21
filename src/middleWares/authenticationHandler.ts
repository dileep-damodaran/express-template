import * as express from 'express';
const JWT = require('express-jwt');


export class AuthenticationHandler{

    public static configure(app: express.Application, publicKey: string): express.Application {

        app.use(JWT({secret: publicKey, algorithms: ['HS256']}).
        unless({

            path:[
                new RegExp("/api/account/login", "i"),
            ]
        }));

        return app;
    }
}