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
};
