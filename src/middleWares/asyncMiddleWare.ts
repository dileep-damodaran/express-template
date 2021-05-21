
import * as express from 'express';

const asyncMiddleWare:any = (fn:any) =>
(req:express.Request, res:express.Response, next:express.NextFunction) => {

    Promise.resolve(fn(req, res, next))
        .catch((err) => {
            console.log('inside asynd cathc');
            next(err);
        });
};

export default asyncMiddleWare;