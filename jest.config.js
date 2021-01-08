module.exports = {
    preset: "ts-jest",
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    moduleNameMapper: {
      "^@/components(.*)$": "<rootDir>/src/components/$1",
      "^@/containers(.*)$": "<rootDir>/src/containers/$1",
      "^@/queries(.*)$": "<rootDir>/src/queries/$1",
      "^@/pages(.*)$": "<rootDir>/pages/$1",
      "^@/animations(.*)$": "<rootDir>/src/animations/$1",
      
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    watchPlugins: ["jest-watch-typeahead/filename" ]
  };