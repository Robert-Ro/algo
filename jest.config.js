module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/src'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
}
