module.exports = ({mode}) => ({
    mode,
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
});
