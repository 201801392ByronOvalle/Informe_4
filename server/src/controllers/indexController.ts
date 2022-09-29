import {Request, Response} from 'express';
// LLamada a la Base de Datos
import pool from '../database';

class IndexController {

    public async index (req: Request, res: Response) {
        const usuarios = pool.query('SELECT * FROM login');
        res.json(usuarios);
    }

    public async getOne(req: Request,res: Response): Promise<any> {
        const {carnet} = req.params;
        const users = pool.query('SELECT * FROM login WHERE carnet = ?', [carnet]);
        console.log(users);
        res.json({text: 'Usuario Encontrado'});
    }
   
    public async create (req: Request,res: Response): Promise<void> {
        pool.query('INSERT INTO login set ?', [req.body]);
        res.json({message: 'Registro de Usuario Guardado'});
    }

    public update (req: Request, res: Response) {
        res.json({text: 'Actualizando contraseña ' + req.params.carnet});
    }
}

export const indexController = new IndexController(); 