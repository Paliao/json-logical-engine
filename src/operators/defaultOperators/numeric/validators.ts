import Joi from 'joi';

export const unlimittedNumbersListValidator = Joi.object({
  numbers: Joi.array().items(Joi.number().required()).required(),
}).required();

export const twoNumbersListValidator = Joi.object({
  numbers: Joi.array().items(Joi.number()).length(2).required(),
}).required();
