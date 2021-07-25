import Joi from 'joi';

export const numberComparationValidator = Joi.object({
  numbers: Joi.array().items(Joi.number()).length(2).required(),
}).required();
