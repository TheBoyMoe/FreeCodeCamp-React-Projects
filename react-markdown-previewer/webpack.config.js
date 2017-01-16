

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            TextArea: 'app/components/TextArea.jsx',
            PreviewArea: 'app/components/PreviewArea',
            PreviewContainer: 'app/components/PreviewContainer'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015',  'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
