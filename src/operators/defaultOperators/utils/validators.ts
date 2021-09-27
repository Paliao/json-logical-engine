import Joi from 'joi';

export const returnsValidator = Joi.object({
  returns: Joi.any().required(),
}).required();
