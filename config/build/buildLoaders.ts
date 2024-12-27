import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import loader from 'mini-css-extract-plugin/types/loader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false,
        exportLocalsConvention: 'as-is',
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      '@teamsupercell/typings-for-css-modules-loader',
      cssLoaderWithModules,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если б мы не использум TS: нужен babel-loader
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  return [
    // Порядок важен
    assetLoader,
    fontsLoader,
    scssLoader,
    tsLoader,
    svgrLoader, // Можно делать SVG как компоненты
  ];
}
