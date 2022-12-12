import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import PokemonController from '@/resources/pokemon/pokemon.controller';
import UserController from '@/resources/user/user.controller';
import ONetController from '@/resources/onet/onet.controller';

validateEnv();

const app = new App([new PokemonController(), new ONetController(), new UserController()], Number(process.env.PORT));

app.listen();
