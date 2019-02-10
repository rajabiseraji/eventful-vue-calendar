module.exports = {
    root: true,
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    plugins: [
        'vue',
        'jest',
    ],
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': 0,
        radix: 0,
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'max-len': [2, {
            code: 300,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
        }],
    },
};
