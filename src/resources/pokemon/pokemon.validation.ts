import Joi from 'joi';

const fetchWithName = Joi.object({
    name: Joi.string().required(),
});

const fetchWithId = Joi.object({
    id: Joi.number().required(),
});

export default { fetchWithName, fetchWithId };
