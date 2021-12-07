import { NextFunction, Request, Response } from 'express';
import { ExpressMiddleWare, Middleware } from '../../lib';

@Middleware()
export default class InjectClassMiddleWare implements ExpressMiddleWare {

    public use(req: Request, res: Response, next: NextFunction) {
        console.log('Inject class Called middleware')
        next();
    }
}
