import {Request, Response} from 'express';

class IngesController {

    index (req: Request, res: Response) {
        res.send('Soy la pagina principal')
    } 
}

const ingesController = new IngesController(); 
export default ingesController;