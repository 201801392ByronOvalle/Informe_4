import {Request, Response} from 'express';
// LLamada a la Base de Datos
import pool from '../database';

class IndexController {
//Consulta a la base datos TODOS los usuarios Get
    public async index (req: Request, res: Response) {
        pool.query('SELECT * FROM login', function (error, lista) {
            if (error) {
                res.status(400).send({text: 'Error al obtener datos de Usuario'});
            } else {
                res.status(200).send(lista)
            }
        });
    }
//Consultar un usuario GetOne
    public async getOne(req: Request,res: Response): Promise<any> {
        const {carnet} = req.params;
        const users = pool.query('SELECT * FROM login WHERE carnet = ?', [carnet] ,function (error, carnet) {
            if (error) {
                res.status(400).send({text: 'Error de carnet de Usuario'});
            } else {
                res.status(200).send(carnet)
            }
        });
    }
//Creacion de un usuario POST   
    public async create (req: Request,res: Response): Promise<void> {
        pool.query('INSERT INTO login set ?', [req.body], function (error, newUser) {
            if (error) {
                res.status(400).send({text: 'Error al ingresar usuario'});
            } else {
                res.status(200).send(newUser)
            }
        });;
    }
//Actualizacion de contraseña UPDATE
    public update (req: Request, res: Response) {
        res.json({text: 'Actualizando contraseña ' + req.params.carnet});
    }
}

export const indexController = new IndexController(); 