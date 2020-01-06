import {injectable} from 'inversify';
import { Request, Response } from 'express';
import {IAnimal} from "../models/interfaces/animal.interface";
//const sharp = require('sharp')
//let transform = sharp()
@injectable()
export class Service {
    private queue: IAnimal[]=[];
    constructor () {
        this.runJub();
    }
    async push2Q(identetyReq: IAnimal){
        this.queue.push(identetyReq);
    }

    //resize image Job -- should be a micro-service and a real Queue
    runJub = async () => {

        setTimeout(() => {
            console.log('JobRunning');

            for (var i=0 ; i< this.queue.length ; i++){
                try {
                    //this.queue[i].image = transform.resize(200, 200);
                }catch(e){
                    console.log("image send by user:" + this.queue[i].username + " cannot be resized" )
                }
            }
            this.runJub();
        }, 10000);
    }

    getAllUserIden = async (username:string, limit: number , timestamp: Date ) => {
        const users=this.queue.filter(u=>u.username===username && timestamp.getTime()<u.timestamp.getTime()).sort((a,b)=>{
            return a.timestamp.getTime()-b.timestamp.getTime();
        });

        return users.slice(0,limit);

    }



}