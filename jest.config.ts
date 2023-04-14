import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/src'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    // '^.+\\.(t|j)sx?$': [
    //   '@swc-node/jest',
    //   {
    //     dynamicImport: true,
    //   },
    // ],
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
}

export default config
