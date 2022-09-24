import {Request, Response} from 'express';
// LLamada a la Base de Datos
import pool from '../database';

class IngesController {

    public index (req: Request, res: Response) {
        pool.query('DESCRIBE inges');
        res.send('Soy la pagina principal tipo Face para Inges')
    } 
}

const ingesController = new IngesController(); 
export default ingesController;