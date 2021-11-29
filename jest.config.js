module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/src'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
}
