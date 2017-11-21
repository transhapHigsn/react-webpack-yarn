const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template:'./client/index.html',
  filename:'index.html',
  inject:'body'
});
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            { test: /\.js$/, loader: 'babel-loader', exclude:/node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [htmlWebpackPluginConfig]
}
