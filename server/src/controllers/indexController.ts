import {Request, Response} from 'express';
// LLamada a la Base de Datos
import pool from '../database';

class IndexController {

    public async index (req: Request, res: Response) {
        const usuarios = pool.query('SELECT * FROM login');
        res.json(usuarios);
    }
   
    public async create (req: Request,res: Response): Promise<void> {
        pool.query('INSERT INTO login set ?', [req.body])
        res.json({message: 'Registro de Usuario Guardado'});
    }
}

export const indexController = new IndexController(); 