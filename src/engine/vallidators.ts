import Joi from 'joi';

import { EngineConfig, Operation, Operator } from 'types';

export const engineConfigValidator = Joi.object({
  enableLogging: Joi.boolean().optional(),
});
