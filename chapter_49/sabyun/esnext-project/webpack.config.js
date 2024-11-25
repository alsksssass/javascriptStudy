// 파일명: webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // CSS 파일 추출 플러그인

module.exports = {
    // 진입점 설정
    entry: './src/js/main.js',

    // 출력 설정
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },

    // 플러그인 설정
    plugins: [
        // CSS 파일을 별도로 추출하는 플러그인
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        })
    ],

    // 모듈 설정
    module: {
        rules: [
            // CSS 로더 설정
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // CSS 파일 추출
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true // 소스맵 활성화
                        }
                    }
                ]
            },
            // 자바스크립트 로더 설정
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    // 개발 서버 설정
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8080,
        open: true,
        hot: true
    },

    // 개발 모드 설정
    mode: 'development',
    
    // 소스맵 설정
    devtool: 'source-map',

    // 모듈 해석 설정
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },

    // 최적화 설정
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};