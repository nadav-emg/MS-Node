
import { Router } from 'express';
const multer = require('multer');
const upload = multer();
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
        this.router.post('/identify', upload.single('image'),this.controller.identifyAnimal);

        this.router.route('/user/:username')
            .get(this.controller.getUserIdent);


    }
}
