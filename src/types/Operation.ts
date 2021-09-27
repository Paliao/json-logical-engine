export interface Operation {
  // The identifier of the operation to be executed
  operator: string;

  // The arguments of the operation itself
  // The args values can be other operations
  args: Record<string, any>;

  // After the operation retuns a result, we are able to run other operations against the result to do other operations
  onResult?: {
    // The operations that will be executed when the operation results in a truthy result
    onTruthy?: Operation;

    // The operations that will be executed when the operation results in a falsy value
    onFalsy?: Operation;
  };

  // The operations that will be executed when the operation raises an error
  onError?: Operation;
}
