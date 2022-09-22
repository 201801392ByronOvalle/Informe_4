import {Request, Response} from 'express';

class IndexController {

    index (req: Request, res: Response) {
        res.send('Soy el login')
    } 
}

export const indexController = new IndexController(); 