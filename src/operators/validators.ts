import Joi from 'joi';

export const engineOperatorValidator = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  handler: Joi.function().required(),
  enableLogging: Joi.boolean().optional(),
}).required();
