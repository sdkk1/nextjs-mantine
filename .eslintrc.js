module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['import', 'unused-imports', 'tailwindcss'],
  rules: {
    // NOTE: import関連のルール
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{next/**,react}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',

    // NOTE: export関連のルール
    'import/prefer-default-export': 'error',
    'import/no-anonymous-default-export': 'error',

    // NOTE: ESLintの構文関連のルール
    curly: 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-await-in-loop': 'error',
    'require-await': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',

    // NOTE: React関連のルール
    'react/display-name': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: false,
        checkInlineFunction: true,
      },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],

    // NOTE: typescript-eslint関連のルール
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      // NOTE: typeLike(class, interface, typeAlias, enum, typeParameter)は、StrictPascalCase
      {
        selector: ['typeLike'],
        format: ['StrictPascalCase'],
      },
      // NOTE: function, method(classMethod, objectLiteralMethod, typeMethod)は、strictCamelCase
      {
        selector: ['function', 'method'],
        format: ['strictCamelCase'],
        filter: { regex: '^_', match: false },
      },
      // NOTE: parameter は、strictCamelCase
      // (ただし、未使用の parameter (_で始まる)は除外する)
      {
        selector: ['parameter'],
        format: ['strictCamelCase'],
        filter: { regex: '^_', match: false },
      },
      // NOTE: variable は、strictCamelCase or UPPER_CASE(固定値定義のみ)
      // (ReactFuncitonComponent は StrictPascalCase で命名するため、types から function を除外する)
      {
        selector: ['variable'],
        types: ['boolean', 'string', 'number', 'array'],
        format: ['strictCamelCase', 'UPPER_CASE'],
      },
      // NOTE: boolean の variable は、特定の prefix をつけて StrictPascalCase
      // (ただし、未使用の variable (_で始まる)は除外する)
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'can', 'should', 'has'],
        filter: { regex: '^_', match: false },
      },
    ],

    // NOTE: Tailwind CSS関連のルール
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/no-arbitrary-value': 'error',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
