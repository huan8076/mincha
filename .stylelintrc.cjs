module.exports = {
  extends: [
    'stylelint-config-standard-scss', // scss 用
    'stylelint-config-recommended-vue/scss', // 能檢查到 vue 底下 並支援 scss
    'stylelint-config-recess-order' // 外部已包裝的排序 https://www.npmjs.com/package/stylelint-config-recess-order
  ],
  plugins: [
    'stylelint-order' // 擴充排序功能
  ],
  overrides: [
    {
      files: ['**/*.(scss|vue)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'alpha-value-notation': null, // 指定 alpha 值的表示法
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }], // 禁止未知的偽元素選擇器。
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }], // 要求或禁止規則前有空行
    'selector-class-pattern': [ // BEM 命名規則
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
    'order/order': [
      [
        'dollar-variables', // $variables
        'custom-properties', // --main-bg-color
        'at-rules', // @include
        'declarations', // css 內容如：display: block;
        {
          type: 'at-rule',
          name: 'supports' // @supports
        },
        {
          type: 'at-rule',
          name: 'media' // @media
        },
        'rules' // 下一層
      ],
      { severity: 'warning' }
    ],
    // 以上 template 新定義不可修改
  }
}