import { Router } from "express"; 

import ingesController from '../controllers/ingesController'; 

class IngesRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ingesController.index);
    }
}

const ingesRoutes = new IngesRoutes();
export default ingesRoutes.router;