const Joi = require('joi');
const JoiExpoPushToken = require('../lib');

const joi = Joi.extend(JoiExpoPushToken);

describe('expoPushToken rule', () => {
  it('extends Joi', () => {
    expect(joi.string().expoPushToken).toBeInstanceOf(Function);
  });

  it('validates tokens', () => {
    const schema = joi.string().expoPushToken();

    [
      'ExpoPushToken[xxxxxxxxxxxxxxxxxxxxxx]',
      'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]',
      'F5741A13-BCDA-434B-A316-5DC0E6FFA94F',
    ]
    .forEach((validToken) => {
      expect(schema.validate(validToken).error).toBeNull();
    });

    [
      'dOKpuo4qbsM:APA91bHkSmF84ROx7Y-2eMGxc0lmpQeN33ZwDMG763dkjd8yjKK-rhPtiR1OoIWNG5ZshlL8oyxsTnQ5XtahyBNS9mJAvfeE6aHzv_mOF_Ve4vL2po4clMIYYV2-Iea_sZVJF7xFLXih4Y0y88JNYULxFfz-XXXXX',
      '5fa729c6e535eb568g18fdabd35785fc60f41c161d9d7cf4b0bbb0d92437fda0',
    ]
    .forEach((invalidToken) => {
      expect(schema.validate(invalidToken).error).toBeInstanceOf(Error);
    });
  });
});
