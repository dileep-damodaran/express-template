import * as express from 'express';
import { FormattedResponse } from '../helpers/formattedResponse';
const mung = require('express-mung');

export class CustomResponseHandler{

    public static configure(app : express.Application){

        app.use(mung.json((body: any, req: express.Request, res: express.Response)=>{

            const formattedResponse = new FormattedResponse(true,body,'');
            return formattedResponse;
        }));

    }
}