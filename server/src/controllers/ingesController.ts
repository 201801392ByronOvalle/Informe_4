import {Request, Response} from 'express';
//Aqui va el import de la db 2 de inges

class IngesController {

    public index (req: Request, res: Response) {
        res.send('Soy la pagina principal tipo Face para Inges')
    } 
}

const ingesController = new IngesController(); 
export default ingesController;