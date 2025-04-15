# Методичка: Установка и настройка ESLint (версия 9.23.0)

## Описание

ESLint — это инструмент для анализа и исправления кода JavaScript, который помогает поддерживать его качество и единообразие. В этой методичке мы установим ESLint 9.23.0, настроим строгую конфигурацию с интеграцией Prettier и протестируем её на учебном проекте.

---

## Шаг 1: Подготовка окружения

1. **Перейдите в директорию проекта:**
Откройте PowerShell и выполните:

  ```JavaScript
cd C:\Netology\Netology_38_javascript_advanced_web_development_course\1_standards_and_work_environment
```


2. **Убедитесь, что Node.js и npm установлены:**
Проверьте версии:

  ```JavaScript
node -v
npm -v
```


  Если они не установлены, скачайте и установите Node.js с официального сайта ([https://nodejs.org](https://nodejs.org)).

3. **Проверьте наличие `package.json`:**
Если файл отсутствует, создайте его:

  ```JavaScript
npm init -y
```


---

## Шаг 2: Установка ESLint

4. **Установите ESLint как зависимость для разработки:**
Выполните:

  ```JavaScript
npm install eslint@^9.23.0 --save-dev
```


5. **Проверьте установку:**
Убедитесь, что ESLint установлен:

  ```JavaScript
npx eslint --version
```


  Ожидаемый вывод: `v9.23.0`.

---

## Шаг 3: Установка Prettier (опционально, для форматирования)

6. **Установите Prettier и плагин для ESLint:**
Выполните:

  ```JavaScript
npm install prettier eslint-plugin-prettier --save-dev
```


7. **Проверьте установку:**

  ```JavaScript
npx prettier --version
```


  Вы увидите текущую версию Prettier (например, `3.x.x`).

---

## Шаг 4: Создание конфигурационного файла ESLint

8. **Создайте файл `eslint.config.mjs`:**
В корне проекта (`1_standards_and_work_environment`) создайте файл `eslint.config.mjs` с помощью текстового редактора или команды:

  ```JavaScript
echo. > eslint.config.mjs
```


9. **Добавьте строгую конфигурацию:**
Вставьте следующий код в `eslint.config.mjs`:

  ```JavaScript
import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier
    },
    rules: {
      "prettier/prettier": "error"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2023
      }
    },
    rules: {
      // Строгость
      "strict": ["error", "global"], // Требует "use strict"
      "no-unused-vars": "error", // Запрещает неиспользуемые переменные
      "no-console": "warn", // Предупреждение на console.log
      "eqeqeq": "error", // Требует === вместо ==
      "curly": "error", // Требует фигурные скобки для блоков
      "no-var": "error", // Запрещает var
      "prefer-const": "error", // Требует const для неизменяемых переменных
      
      // Форматирование
      "quotes": ["error", "single", { "avoidEscape": true }], // Одинарные кавычки
      "semi": ["error", "always"], // Требует точку с запятой
      "indent": ["error", 2], // Отступы в 2 пробела
      "linebreak-style": ["error", "unix"], // Unix-стиль переносов (\n)
      "eol-last": ["error", "always"], // Перенос строки в конце файла
      "no-trailing-spaces": "error", // Запрещает пробелы в конце строк
      "comma-dangle": ["error", "never"], // Без висячих запятых
      "object-curly-spacing": ["error", "always"], // Пробелы внутри { key: value }
      "array-bracket-spacing": ["error", "never"], // Без пробелов в [1, 2]
      "space-before-function-paren": ["error", "never"], // Без пробела перед ()
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }], // Не более 1 пустой строки
      "max-len": ["error", { "code": 120 }] // Максимальная длина строки 120 символов
    }
  }
];
```


---

## Шаг 5: Настройка Prettier (опционально)

10. **Создайте файл `.prettierrc`:**
В корне проекта выполните:

  ```JavaScript
echo. > .prettierrc
```


11. **Добавьте настройки:**
Вставьте в `.prettierrc`:

  ```JSON
{
    "singleQuote": true,
    "semi": true,
    "tabWidth": 2,
    "trailingComma": "none",
    "endOfLine": "lf"
}
```


  **Настройки Prettier**

  - `singleQuote: true` — Использовать одинарные кавычки ('') вместо двойных ("") для строк

  - `semi: true` — Добавлять точку с запятой (;) в конце выражений

  - `tabWidth: 2` — Устанавливать ширину отступов в 2 пробела (вместо табуляции)

  - `trailingComma: "none"` — Не добавлять висячие запятые в объектах, массивах и т.д.

  - `endOfLine: "lf"` — Использовать Unix-стиль переносов строк (\n) вместо Windows-стиля (\r\n)

  Эти настройки синхронизированы с правилами ESLint для единообразия.

---

## Шаг 6: Добавление скриптов в `package.json`

12. **Откройте `package.json`:**
Найдите файл в корне проекта.

13. **Добавьте скрипты:**
Обновите раздел `scripts`:

  ```JSON
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```


---

## Шаг 7: Тестирование конфигурации

14. **Создайте тестовый файл:**
В папке `src/js` создайте файл `script.js`:

  ```JavaScript
mkdir src\js
echo var x = 1 > src\js\script.js
echo console.log(x) >> src\js\script.js
```


15. **Запустите линтинг:**

  ```JavaScript
npm run lint
```


  Ожидаемый вывод:

  ```JavaScript
C:\Netology\Netology_38_javascript_advanced_web_development_course\1_standards_and_work_environment\src\js\script.js
  1:1  error    'var' is not allowed            no-var
  1:1  warning  Unexpected console statement    no-console
  1:7  error    Missing semicolon               semi
```


16. **Исправьте автоматически:**

  ```JavaScript
npm run lint:fix
```


  Проверьте `script.js` — он станет:

  ```JavaScript
const x = 1;
console.log(x);
```


  Предупреждение `no-console` останется, так как оно не исправляется автоматически.

---

## Шаг 8: Интеграция с Git (опционально)

17. **Обновите `.gitignore`:**
Убедитесь, что `node_modules` исключён:

  ```JavaScript
echo node_modules/ >> .gitignore
```


18. **Добавьте файлы в Git:**

  ```JavaScript
git add .
git commit -m "Add ESLint and Prettier configuration"
```


---

## Полезные команды

- **Проверка кода:** `npm run lint`

- **Исправление кода:** `npm run lint:fix`

- **Версия ESLint:** `npx eslint --version`

- **Версия Prettier:** `npx prettier --version`

---

## Итог

Вы настроили ESLint 9.23.0 с:

- Строгими правилами для качества кода (запрет `var`, требование `===`, контроль переносов строк).

- Интеграцией Prettier для форматирования.

- Поддержкой современного JavaScript (ES2023, модули).

