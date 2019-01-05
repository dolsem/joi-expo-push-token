const { Expo } = require('expo-server-sdk');

module.exports = joi => ({
  name: 'string',
  base: joi.string(),
  language: {
    expopushtoken: 'must be a valid Exponent push token',
  },
  rules: [{
    name: 'expoPushToken',
    description: 'Must be a valid Exponent push token',
    validate(params, value, state, options) {
      if (Expo.isExpoPushToken(value)) {
        return value;
      }
      return this.createError('string.expopushtoken', { value }, state, options);
    },
  }],
});
