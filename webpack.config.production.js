const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { outputConfig, scssConfig, entryConfig, terserPluginConfig, alias } = require("./env.config");

module.exports = (env, options) => {
    return {
        mode: options.mode,
        entry: {
            main: entryConfig,
            background: path.join(__dirname, 'src', 'script', 'background', 'background.ts'),
            content_script: path.join(__dirname, 'src', 'script', 'content', 'content_script.tsx'),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env"],
                                    ],
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
            ],
        },
        resolve: { extensions: [".tsx", ".ts", ".js"], alias },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "",
        },
        optimization: {
            minimizer: [
                new TerserPlugin(terserPluginConfig)
            ],
            splitChunks: {
                chunks: "all",
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: scssConfig.destFileName }),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                minify: false
            }),
            new CopyPlugin({
                patterns: [{ from: "./public", to: "." }],
                options: {},
            }),
        ]
    };
};