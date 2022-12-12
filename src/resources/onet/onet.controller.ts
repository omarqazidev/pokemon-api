import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import ONetService from './onet.service';

class ONetController implements Controller {
    public path = '/onet';
    public router = Router();
    private ONetService = new ONetService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.fetch);
        this.router.get(`${this.path}/sort`, this.sort);
    }

    private fetch = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const fetchedData = await this.ONetService.fetchData();
            res.status(200).json(fetchedData);
        } catch (error) {
            next(new HttpException(400, 'Cannot fetch onet data'));
        }
    };

    private sort = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const sortedData = await this.ONetService.sortData();
            res.status(200).json(sortedData);
        } catch (error) {
            next(new HttpException(400, 'Cannot sort onet data'));
        }
    };
}

export default ONetController;
