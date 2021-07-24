export interface Operator {
  // Name of the operator, is unique and provided by the engine when the config is being mapped
  readonly name?: string;

  // A brief description of what this operation is meant to do
  description?: string;

  // Arguments that the operator receives
  args: any;

  // Validates the arguments, and throws error(onFailure) if the correct arguments are not provider
  argsValidator?: any;

  // The operation itself
  operator: (args: any) => any;

  // If provided the engine will look in handle the operation as an async operation
  // Defaults to false
  isAsync?: boolean;

  // Will run a log of the result of all operations that use this operator, even if it is an error
  // Overwrites the engineConfig of "enableLogging"
  // Does not impact onSuccess nor onError
  enableLogging?: boolean;
}
