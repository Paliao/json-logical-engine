import Joi from 'joi';

export const engineOperatorValidator = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  args: Joi.object().required(),
  operator: Joi.function().required(),
  isAsync: Joi.boolean().optional(),
  enableLogging: Joi.boolean().optional(),
}).required();
