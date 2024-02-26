module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // If you're using Babel, you might not need ts-jest and can configure Babel here
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  };
  