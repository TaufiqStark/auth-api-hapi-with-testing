/* eslint-disable no-unused-vars, class-methods-use-this */
class PasswordHash {
  async hash(password) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  }

  async comparePassword(plain, encrypted) {
    throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENT');
  }
}
module.exports = PasswordHash;
