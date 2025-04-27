module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'never'], // 禁止尾部使用分號 (standard)
    'no-multi-spaces': 'error', // 禁止使用多個空格 (standard)
    'no-useless-return': 'error', // 禁止使用不必要的return
    'no-return-assign': 'error', // 禁止在return 語句中使用賦予語句
    'no-duplicate-case': 'error', // 禁止出現重複的case (standard)
    'no-multiple-empty-lines': 'error', // 禁止出現多行空行(standard)
    'no-trailing-spaces': 'error', // 禁止一行结束後面不要有空格 (standard)
    eqeqeq: 'error', // 要求使用 === 和 !== (standard)
    'arrow-spacing': 'error', // 要求箭頭函式前後空格一致
    // 以上不能修改
    'no-unused-vars': 'off', // 關閉原生規則
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all', // 檢查所有變數（包括全域變數和區域變數）
      argsIgnorePattern: '^_$', // 忽略名稱以 _ 開頭的參數
      varsIgnorePattern: '^_$' // 忽略名稱以 _ 開頭的變數
    }],
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/attributes-order': 'error',
    'vue/component-tags-order': ['error', {
      order: [
        'template',
        'script',
        'style'
      ]
    }],
    // 以上 template 新定義不可修改
    // 下方可根據專案需求自行新增規範，原則上不能違背上方規定
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'eol-last': 'off'
  }
}