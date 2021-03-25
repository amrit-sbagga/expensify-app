//entry -> output

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//console.log(path.join(__dirname, 'public'));

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css')

    console.log('env = ', env);
    return {
        entry :  [
            'react-dates/initialize',
            'react-dates/lib/css/_datepicker.css',
            './src/app.js'
        ],
        // entry : './src/app.js',
        output : {
            path: path.join(__dirname, 'public'),
            filename : 'bundle.js'
        },
        module: {
            rules : [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test : /\.s?css$/,
                    use : CSSExtract.extract({
                        use : [
                            {
                                loader : 'css-loader',
                                options : {
                                    sourceMap : true
                                }
                            },
                            {
                                loader : 'sass-loader',
                                options : {
                                    sourceMap : true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins : [
            CSSExtract
        ],
        devtool : isProduction? 'source-map' : 'inline-source-map',
        mode:'development',
        devServer : {
            contentBase : path.join(__dirname, 'public'),
            historyApiFallback : true
        }
    };
};

//check webpack docs available at https://webpack.js.org/configuration 
//loader
//webpack.js.org/configuration/dev-server
