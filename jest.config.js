/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },

  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
};
