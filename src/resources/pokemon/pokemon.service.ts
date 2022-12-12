import PokemonModel from '@/resources/pokemon/pokemon.model';
import Pokemon, { PokemonObject } from '@/resources/pokemon/pokemon.interface';
import axios, { AxiosResponse } from 'axios';

class PokemonService {
    private pokemon = PokemonModel;

    protected async create(pokemons: PokemonObject[]): Promise<Pokemon[]> {
        try {
            const pokemon = await this.pokemon.insertMany(pokemons);
            return pokemon;
        } catch (error) {
            throw new Error('Unable to create pokemon');
        }
    }

    public async fetch(): Promise<PokemonObject[]> {
        try {
            let pokemons: PokemonObject[] | null = null;

            const response = await axios.get('http://pokemon.test.dormzi.com/pokemon');
            pokemons = response.data;
            if (pokemons === null) {
                throw new Error('pokemon fetch response cannot be null');
            }

            return pokemons;
        } catch (error) {
            throw new Error('Unable to fetch pokemon');
        }
    }

    public async fetchByName(name: string): Promise<PokemonObject> {
        try {
            const pokemons = await this.fetch();
            const namedPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase())[0];
            return namedPokemon;
        } catch (error) {
            throw new Error('Unable to fetch pokemon by name');
        }
    }

    public async fetchById(id: string): Promise<PokemonObject> {
        try {
            const pokemons = await this.fetch();
            const idedPokemon = pokemons.filter((pokemon) => pokemon.id === parseInt(id))[0];
            return idedPokemon;
        } catch (error) {
            throw new Error('Unable to fetch pokemon by id');
        }
    }

    public async fetchPictures(): Promise<string[]> {
        try {
            const pokemons = await this.fetch();
            let result = pokemons.map((pokemon) => pokemon.picture);
            return result;
        } catch (error) {
            throw new Error('Unable to fetch pokemon pictures');
        }
    }

    public async fetchAndStoreData(): Promise<Pokemon[]> {
        try {
            const promises: Promise<AxiosResponse<any, any>>[] = [];
            const pokemons = await this.fetch();
            let detailedPokemons: PokemonObject[] = [];

            for (let pokemon of pokemons) {
                const response = await axios.get(`http://pokemon.test.dormzi.com/pokemon/${pokemon.id}`);
                detailedPokemons.push(response.data);
            }

            const storedPokemon = await this.create(detailedPokemons);

            return storedPokemon;
        } catch (error) {
            throw new Error('Unable to fetch and store pokemon data');
        }
    }
}

export default PokemonService;
