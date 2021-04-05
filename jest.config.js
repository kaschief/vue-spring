require("ts-jest");

module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: true,
    },
    "vue-jest": {
      tsConfig: true,
      pug: {
        basedir: "<rootDir>/src",
      },
    },
  },
  verbose: true,
  moduleFileExtensions: ["js", "ts", "html", "vue"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.html$": "<rootDir>scripts/jest-html-loader.js",
    "^.+\\.pug$": "<rootDir>scripts/jest-pug-loader.js",
    "^.+\\.vue$": "vue-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  roots: ["<rootDir>/src"],
};
