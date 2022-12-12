import { Document } from 'mongoose';

export default interface Pokemon extends Document {
    id: number;
    name: string;
    picture: string;
    base: Base;
    cname: string;
    ename: string;
    jname: string;
    skills: Skills;
    type: string[];
}

interface Base {
    Attack: number;
    Defense: number;
    HP: number;
    'Sp.Atk': number;
    'Sp.Def': number;
    Speed: number;
}

interface Skills {
    egg: number[];
    level_up: number[];
    tm: number[];
    transfer: number[];
    tutor: number[];
}

interface PokemonObject {
    id: number;
    name: string;
    picture: string;
    base?: Base;
    cname?: string;
    ename?: string;
    jname?: string;
    skills?: Skills;
    type?: string[];
}

export { PokemonObject };
