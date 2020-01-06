import { injectable } from 'inversify';
import { Request, Response } from 'express';

import {Service} from "../services/service";
import {IAnimal} from "../models/interfaces/animal.interface";



@injectable()
export class Controller {

    constructor(private service: Service){

    }
    identifyAnimal = async(req: Request, res: Response) => {
        try {
            const identetyReq: IAnimal = {
                image: req.file,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                timestamp: req.body.timestamp,
                username: req.body.username
            }
            this.service.push2Q(identetyReq);
            res.status(200).send("input was received and is now processing");
        } catch (e) {
            console.log(e.message);
            res.status(500).send("failed");
        }
    }
        getUserIdent = async(req: Request, res: Response) => {
            try {
                const users_list:any= await this.service.getAllUserIden("",32,new Date());
                res.status(200).send(users_list);
            } catch (e) {
                console.log(e.message);
                res.status(500).send("failed");
            }

    }


}