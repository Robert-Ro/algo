import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import { resolve } from 'path'
import htmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration & DevConfiguration = {
  entry: resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'bundle.[contenthash].js',
    clean: true,
    path: resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        options: {},
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'MapleImage Playground',
      templateContent: `
      <h3>MapleImage playground</h3>
      <div id="app">
        <aside id="aside"></aside>
        <main id="main"></main>
      </div>
      `,
    }),
    new HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 4444,
    historyApiFallback: true,
  },
}

export default config
