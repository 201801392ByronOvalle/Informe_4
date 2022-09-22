import {Request, Response} from 'express';
// LLamada a la Base de Datos
import pool from '../database';

class IndexController {

    public index (req: Request, res: Response) {
        pool.query('DESCRIBE login');
        res.send('Soy el login')
    } 
}

export const indexController = new IndexController(); 