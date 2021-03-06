module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier',
        'prettier/react'
    ],
    "parser": "@typescript-eslint/parser", 
    "parser": 'babel-eslint', "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
        'warn',
        {extensions: ['.js', '.jsx']}
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single']
    }
};
