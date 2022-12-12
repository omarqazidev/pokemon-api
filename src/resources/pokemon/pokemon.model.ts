import { Schema, model } from 'mongoose';
import Pokemon from '@/resources/pokemon/pokemon.interface';
import { object } from 'joi';

const PokemonSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        base: {
            type: Object,
            required: false,
        },
        cname: {
            type: String,
            required: false,
        },
        ename: {
            type: String,
            required: false,
        },
        jname: {
            type: String,
            required: false,
        },
        skills: {
            type: Object,
            required: false,
        },
        type: {
            type: Array,
            required: false,
        },
    },
    { timestamps: true }
);

export default model<Pokemon>('Pokemon', PokemonSchema);
