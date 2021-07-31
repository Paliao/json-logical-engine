export const mockValidIfOperation = {
  operator: 'if',
  args: {
    condition: [
      {
        operator: 'eq',
        args: {
          comparison: [1, 1],
        },
      },
    ],
  },
};

export const mockValidEqOperation = {
  operator: 'eq',
  args: {
    comparison: [{ test: true }, { test: true }],
  },
};

export const mockValidNeqOperation = {
  operator: 'neq',
  args: {
    comparison: [{ test: true }, { test: true, b: false }],
  },
};

export const mockValidOrOperation = {
  operator: 'or',
  args: {
    conditions: [true, false],
  },
};

export const mockValidAndOperation = {
  operator: 'and',
  args: {
    conditions: [true, true],
  },
};
