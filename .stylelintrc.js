module.exports = {
  "extends": [
    "stylelint-config-recess-order",
    "stylelint-config-standard",

    "stylelint-config-recommended",
    "stylelint-prettier/recommended"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-prettier",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  "rules": {
    "prettier/prettier": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "color-hex-length": null,
    "color-named": "never",
    "shorthand-property-no-redundant-values": null
  }
};
