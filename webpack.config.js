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
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: "babel-loader",
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
};
