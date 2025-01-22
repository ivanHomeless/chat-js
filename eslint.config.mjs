import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Настройки для TypeScript и JavaScript файлов
  {
    files: ['**/*.{ts}'], // Поддержка файлов JS и TS
    languageOptions: {
      parser: tsParser, // Парсер для TypeScript
      parserOptions: {
        ecmaVersion: 2020, // Версия ECMAScript
        sourceType: 'module', // Использование модулей
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Плагин для TypeScript
      prettier: prettierPlugin, // Плагин Prettier
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Рекомендации для TypeScript
      'prettier/prettier': 'error', // Интеграция с Prettier
      'no-unused-vars': 'warn', // Предупреждения для неиспользуемых переменных
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],  // Строгие правила для типов
      '@typescript-eslint/strict-boolean-expressions': 'off',  // Отключаем строгие правила для boolean
      '@typescript-eslint/prefer-nullish-coalescing': 'off',  // Отключаем предпочтение nullish coalescing
      '@typescript-eslint/explicit-function-return-type': 'off',  // Отключаем обязательные типы для возвращаемых значений функций
      '@typescript-eslint/restrict-template-expressions': 'off',  // Отключаем ограничение для выражений в шаблонах
      '@typescript-eslint/triple-slash-reference': 'off',  // Отключаем строгие проверки для triple-slash
      '@typescript-eslint/ban-types': 'off',  // Отключаем бан типов
      '@typescript-eslint/consistent-type-assertions': 'off',  // Отключаем правила для согласования type assertions
      'jsx-a11y/anchor-is-valid': 'off',  // Отключаем проверки для anchor тегов
      'curly': ['error', 'all'],  // Требуем всегда фигурные скобки
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],  // Ошибки на несанкционированные пробелы
      'no-console': ['error', { allow: ['info', 'error', 'warn'] }],  // Разрешаем консольные логи только с info, error, warn
    },
  },

  // Настройки для JavaScript файлов
  {
    files: ['./src/**/*.js'], // Только JS файлы
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
    },
    rules: {
      'no-unused-vars': 'warn', // Предупреждения для неиспользуемых переменных      
    },
  },

  // Отключение конфликтующих с Prettier правил
  prettierConfig,

    {
        ignores: [            
            "node_modules/*",           // ignore its content
            "dist"
        ]
    }
]