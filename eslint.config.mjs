import eslintConfigPrettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    perfectionist
  },
  rules: {
    // Nuxt & Vue specific rules
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'warn',
    'vue/require-default-prop': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    
    // Improved HTML formatting rules (standard Vue style guide)
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    
    'vue/attributes-order': ['warn', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: false
    }],

    // Stylistic overrides to match .prettierrc.json
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/max-len': ['warn', { code: 100, ignoreComments: true, ignoreUrls: true }],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // General quality rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    
    // Sort imports and properties
    'perfectionist/sort-imports': ['warn', {
      type: 'natural',
      order: 'asc',
      groups: [
        'type',
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
        'side-effect',
        'unknown'
      ]
    }]

  }
})
// Add Prettier config last to disable conflicting rules
.append(eslintConfigPrettier)


