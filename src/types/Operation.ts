export interface Operation {
  // The identifier of the operation to be executed
  operator: '';

  // The arguments of the operation itself
  args: {};

  // The operations that will be executed when the operation is sucessfull
  onSucess: Operation[];

  // The operations that will be executed when the operation is a failure
  onFailure: Operation[];
}
