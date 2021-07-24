import Joi from 'joi';

export const engineConfigValidator = Joi.object({
  enableLogging: Joi.boolean().optional(),
}).required();
