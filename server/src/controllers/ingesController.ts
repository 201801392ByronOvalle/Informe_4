import {Request, Response} from 'express';

class IngesController {

    public index (req: Request, res: Response) {
        res.send('Soy la pagina principal tipo Face para Inges')
    } 
}

const ingesController = new IngesController(); 
export default ingesController;