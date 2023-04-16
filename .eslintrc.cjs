module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'node': true,
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
        },
    ],
    extends: [
        'eslint:recommended',
        'plugin:tailwindcss/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
    ],
    parserOptions: {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    rules: {
        'vue/require-default-prop': 'off',
        'vue/attribute-hyphenation': ['error', 'never', {
            'ignore': [],
        }],
        'object-curly-spacing': [2, 'always'],
        'no-trailing-spaces': 'error',
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 1,
            },
            'multiline': {
                'max': 1,
            },
        }],
        'vue/no-v-html': 'warn',
        'comma-dangle': ['error', 'always-multiline'],

        /*
         * The normal no-unused-vars gives errors about unused vars for typed
         * events, so we use no-unused-vars from @typescript-eslint instead
         */
        'no-unused-vars': 'off',

        /* typescript-eslint says:
         * We strongly recommend that you do not use the no-undef
         * lint rule on TypeScript projects. The checks it provides
         * are already provided by TypeScript without the need for
         * configuration - TypeScript just does this significantly better.
         */
        'no-undef': 'off',

        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'never',
        ],
    },
}
