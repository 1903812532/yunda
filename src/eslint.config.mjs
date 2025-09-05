module.exports = {
  "rules": {
    "@typescript-eslint/no-unused-vars": ["warn", {
      "varsIgnorePattern": "^setLanguage$",
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }]
  }
}
