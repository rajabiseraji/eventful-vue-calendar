/**
 * Vue config
 */

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/scss/main.scss";
                    `,
            },
        },
    },
    // chainWebpack: (config) => {
    //     module: {
    //       rules: [{
    //         test: /\.scss$/,
    //         use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader', {
    //           loader: 'style-resources-loader',
    //           options: {
    //             patterns: [
    //               path.resolve(__dirname, '~/src/styles/scss/imports.scss'),
    //             ]
    //           }
    //         }]
    //       }]
    //     },
    // },
};
