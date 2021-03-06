module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-scss",
    "stylelint-config-prettier", // Make sure to put it last. ref: https://github.com/prettier/stylelint-config-prettier
  ],
  rules: {
    // Add rules
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["include", "mixin", "each"] },
    ],
  },
  ignoreFiles: ["src/**/*.tsx"],
}
