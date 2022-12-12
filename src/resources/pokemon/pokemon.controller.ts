import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import PokemonService from '@/resources/pokemon/pokemon.service';
import authenticated from '@/middleware/authenticated.middleware';

class PokemonController implements Controller {
    public path = '/pokemon';
    public router = Router();
    private PokemonService = new PokemonService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.get(`${this.path}`, this.fetchPictures);
        this.router.get(`${this.path}/data`, authenticated, this.fetchPokemon);
        this.router.get(`${this.path}/store`, this.fetchAndStorePokemon);
    }

    private fetchPictures = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            let pokemon_pictures = await this.PokemonService.fetchPictures();
            res.status(200).json({ pokemon_pictures });
        } catch (error) {
            next(new HttpException(400, 'Cannot fetch pokemon pictures'));
        }
    };

    private fetchPokemon = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { name, id } = req.query;
            let pokemon = null;

            if (name && name !== '' && typeof name === 'string') {
                pokemon = await this.PokemonService.fetchByName(name);
            } else if (id && id !== '' && typeof id === 'string') {
                pokemon = await this.PokemonService.fetchById(id);
            } else {
                pokemon = await this.PokemonService.fetch();
            }

            res.status(200).json({ pokemon });
        } catch (error) {
            next(new HttpException(400, 'Cannot fetch pokemon'));
        }
    };

    private fetchAndStorePokemon = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            let pokemon_data = await this.PokemonService.fetchAndStoreData();
            res.status(200).json({ pokemon_data });
        } catch (error) {
            next(new HttpException(400, 'Cannot fetch and store pokemon'));
        }
    };
}

export default PokemonController;
