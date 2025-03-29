export default {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(\(\S+\))?:(\s\S+)/, // 中英數開頭、(scope)選填、冒號後接空白後接任意文字
      headerCorrespondence: ['type', 'scope', 'subject'],
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      mergePattern: null,
      mergeCorrespondence: null
    }
  },
  rules: {
    'references-empty': [1, 'never'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'chore',
        'revert',
        'release'
      ]
    ]
  }
}
