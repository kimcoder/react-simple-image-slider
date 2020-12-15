const path = require("path");

module.exports = {
    entry: {
        index: ["./example/App.jsx"],
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "example"),
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: "babel-loader",
            }, {
              test: /\.css$/,
            loader: "style-loader!css-loader"
          }, {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
          }],
    },
    mode: "production",
    plugins: [
    ],
    devServer: {
        contentBase: "./example",
        host: "localhost",
        inline: true,
        open: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
};
