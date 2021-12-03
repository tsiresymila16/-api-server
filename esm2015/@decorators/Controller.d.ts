import { NextFunction, Request, Response } from "express";
import { ExpressMiddleWare } from "../@types";
declare type ControllerOptions = {
    prefix?: string;
};
export declare const Controller: (options?: string | ControllerOptions | undefined, responseType?: string | undefined) => (target: Function) => void;
export declare const JsonController: (baseUrl?: string | ControllerOptions | undefined) => (target: Function) => void;
export default class DefaultMiddleWare implements ExpressMiddleWare {
    use(req: Request, res: Response, next: NextFunction): void;
}
export {};