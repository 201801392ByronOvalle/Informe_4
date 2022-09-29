import { Router } from "express"; 
import {indexController} from '../controllers/indexController';

class IndexRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/:carnet', indexController.getOne);
        this.router.post('/', indexController.create);
        this.router.put('/:carnet', indexController.update);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;