class UserRepository {
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async addUser(registerUser) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  async verifyAvailableUsername(username) {
    throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = UserRepository;
