module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'google',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4],
        'quote-props': ['error', 'as-needed'],
        'prefer-template': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'require-jsdoc': 'off',
        'new-cap': 'off',
        'max-len': 'off',
        'no-invalid-this': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
