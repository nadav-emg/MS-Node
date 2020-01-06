import {injectable} from 'inversify';
import { Request, Response } from 'express';


@injectable()
export class Service {
    async get(){
        let rests = "temp";
        return rests;
    }

}