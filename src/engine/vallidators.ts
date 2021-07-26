import Joi from 'joi';

export const engineConfigValidator = Joi.object({
  enableLogging: Joi.boolean().optional(),
}).required();

export const operationValidator = Joi.object({
  operator: Joi.string().required(),
  args: Joi.object().required(),

  onResult: Joi.object({
    onTruthy: Joi.link('#operationValidator').optional(),
    onFalsy: Joi.link('#operationValidator').optional(),
  }).optional(),
}).id('operationValidator');
