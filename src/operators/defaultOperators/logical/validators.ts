import Joi from 'joi';

export const logicalUnlimitedConditionsValidator = Joi.object({
  conditions: Joi.array().items(Joi.any().required()).min(2).required(),
}).required();

export const logicalSingleConditionValidator = Joi.object({
  condition: Joi.array().items(Joi.any().required()).length(1).required(),
}).required();

export const logicalCompararisonsValidator = Joi.object({
  comparison: Joi.array().items(Joi.any().required()).length(2).required(),
}).required();
