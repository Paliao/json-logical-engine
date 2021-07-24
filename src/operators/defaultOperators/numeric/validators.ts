import Joi from 'joi';

export const gtValidator = Joi.object({
  numbers: Joi.array().items(Joi.number()).length(2).required(),
}).required();
