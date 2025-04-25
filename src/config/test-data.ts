export const testData = {
  validCredentials: {
    username: process.env.VALID_USERNAME || 'standard_user',
    password: process.env.VALID_PASSWORD || 'secret_sauce'
  },
  invalidCredentials: {
    username: 'invalid_user',
    password: 'invalid_password'
  }
}; 