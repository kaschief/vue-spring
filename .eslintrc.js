module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["standard", "plugin:prettier/recommended", "prettier/standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      files: ["*.spec.ts"],
      plugins: ["@typescript-eslint", "jest", "cypress"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/standard",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
    },
    {
      files: ["*.js", "*.ts"],
      rules: {
        "prettier/prettier": [
          "warn",
          {
            printWidth: 120,
          },
        ],
        "max-len": [
          "warn",
          {
            code: 120,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
      },
    },
    {
      files: ["*.ts"],
      plugins: ["@typescript-eslint", "prettier"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/standard",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.js"],
      plugins: ["prettier"],
      parser: "@typescript-eslint/parser",
      extends: ["eslint:recommended", "prettier", "prettier/standard", "plugin:prettier/recommended"],
    },
    {
      files: ["*.vue", "*.d.ts"],
      plugins: ["@typescript-eslint", "prettier", "vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
        "prettier",
        "prettier/standard",
        "prettier/vue",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": [
          "warn",
          {
            printWidth: 120,
            quotes: "double",
            quoteProps: "as-needed",
            pugAttributeSeparator: "none",
            pugPrintWidth: 120,
            pugClosingBracketPosition: "last-line",
            pugWrapAttributesThreshold: 2,
          },
        ],
        "vue/custom-event-name-casing": "off",
        "vue/max-len": [
          "warn",
          {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
          },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["*.spec.ts", "*.ts", "*.vue"],
      rules: {
        "array-callback-return": "off",
        "arrow-body-style": ["error", "as-needed"],
        "consistent-return": "error",
        camelcase: "off",
        "default-case": "error",
        "max-lines": ["warn", { max: 500, skipBlankLines: true, skipComments: true }],
        "max-classes-per-file": "error",
        "multiline-comment-style": ["warn", "starred-block"],
        "no-alert": "warn",
        "no-console": ["error", { allow: ["dev", "error", "dir"] }],
        "no-debugger": "warn",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-unreachable": "error",
        "no-unused-vars": "off",
        "no-underscore-dangle": "error",
        "no-undef": "off",
        "no-empty": "error",
        "no-multi-spaces": "warn",
        "no-useless-return": "error",
        "no-param-reassign": "error",
        "no-prototype-builtins": "off",
        "no-sequences": "error",
        "no-unused-expressions": "error",
        "prefer-promise-reject-errors": "warn",
        radix: "warn",
        "quote-props": "off",
        "no-restricted-properties": [
          2,
          {
            object: "this",
            property: "$store",
          },
        ],
        "arrow-spacing": "warn",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-destructuring": ["warn", { object: true, array: false }],
        "prefer-spread": "warn",
        "sort-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "variableLike",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "variable",
            filter: "^(Test|Vue|CI)",
            format: null,
          },
          {
            selector: "variableLike",
            filter: "^(Test|Vue)",
            format: null,
          },
          {
            selector: "parameter",
            filter: "^(Test|Vue)",
            format: null,
          },
          {
            selector: "property",
            filter: "^(Test|Vue|ReactRailsUJS|B)",
            format: null,
          },
          { selector: "enumMember", format: ["PascalCase", "UPPER_CASE"] },
          {
            selector: "parameter",
            format: ["camelCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "memberLike",
            modifiers: ["private"],
            format: ["PascalCase", "camelCase"],
          },
          {
            selector: "property",
            format: ["snake_case", "camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
        ],
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: ["app/assets/**/*.js", "frontend/tests/**/*.js", "**.d.ts", "spec/cypress/**/*.js"],
      rules: {
        "no-var-requires": "off",
        "no-unused-expressions": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        trailingComma: "es5",
        arrowParens: "always",
        quotes: "double",
        quoteProps: "consistent",
        pugAttributeSeparator: "none",
        pugSingleQuote: false,
        pugPrintWidth: 120,
        pugClosingBracketPosition: "last-line",
        pugClassNotation: "as-is",
        pugWrapAttributesThreshold: 2,
      },
    ],
  },
  settings: {},
};
