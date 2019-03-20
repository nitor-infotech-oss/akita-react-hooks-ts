module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['react', 'jest', 'flowtype', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'class-methods-use-this': 0,
    'eol-last': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    'no-plusplus': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_$',
      },
    ],
    'import/first': 0,
    'import/extensions': [
      2,
      'always',
      { yml: 'never', js: 'never', json: 'never' },
    ],
    'import/no-named-as-default': 0,
    'arrow-body-style': 0,
    'no-else-return': 0,
    'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
    'no-prototype-builtins': 0,
    'global-require': 0,
    'newline-before-return': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-return-assign': [2, 'except-parens'],
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    curly: [2, 'all'],

    // React
    'react/display-name': 0,
    'react/jsx-boolean-value': 1, //check
    'react/jsx-sort-props': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0, // allow non-required props to no have default values
    'react/jsx-filename-extension': 0, // allows JSX in js files
    'react/sort-comp': 0, // Don't enforce a react prototype order
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/no-unused-prop-types': 1, // fix
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-pascal-case': 0,
    'react/prefer-stateless-function': 0,
    'react/no-string-refs': 1, // fix
    'react/no-find-dom-node': 1, // fix
    'react/no-array-index-key': 0,
    'react/prefer-es6-class': 0, // allow createClass for now, until legacy code migrated

    'jsx-a11y/label-has-for': 1, // fix?
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/media-has-caption': 0,

    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',

    // Flow
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 0,
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': [
      2,
      { Function: false, Object: false, any: false },
    ],
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': [
      0,
      'always',
      {
        annotateUndefined: 'never',
      },
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': 0,
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
