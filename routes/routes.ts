
import { Router } from 'express';
import { injectable } from 'inversify';
import { Controller} from "../controllers/controller";

@injectable()
export class Routes {

    router: Router;

    constructor(private controller: Controller) {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.route('/temp')
            .get(this.controller.get);


    }
}
