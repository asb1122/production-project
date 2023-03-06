import { BuildOptions } from './types/config';
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // creates 'styles' nodes from JS string
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev 
                            ? '[path][name]__[local]' 
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader',
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}