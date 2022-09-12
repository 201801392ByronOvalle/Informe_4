import { Router } from "express"; 

class IngesRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Soy la pagina tipo Face pero para Inges'));
    }
}

const ingesRoutes = new IngesRoutes();
export default ingesRoutes.router;