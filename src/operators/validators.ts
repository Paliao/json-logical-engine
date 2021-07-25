import Joi from 'joi';

export const operationValidator = Joi.object({
  operator: Joi.string().required(),
  args: Joi.object().required(),
});

export const engineOperatorValidator = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  operator: Joi.function().required(),
  isAsync: Joi.boolean().optional(),
  enableLogging: Joi.boolean().optional(),
}).required();
