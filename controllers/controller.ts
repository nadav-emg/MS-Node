import { injectable } from 'inversify';
import { Request, Response } from 'express';

import {Service} from "../services/service";



@injectable()
export class Controller {

    constructor(private service: Service){

    }
    get = async(req: Request, res: Response) => {
        try {
            const items = await this.service.get();
            res.status(200).send(items);
        } catch (e) {
            console.log(e.message);
            res.send(e.message);
        }

    }


}