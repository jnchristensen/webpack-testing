module.exports = {
    entry: "./src/js/app.js",

    module: {
        rules: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
        ]
    }
}