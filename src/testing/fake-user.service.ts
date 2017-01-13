export class FakeUserService {
  testUser = { name: 'Test User' };

  getUser(name) {
    if (name.toLowerCase() === 'Test User') {
      return Promise.resolve(this.testUser);
    } else {
      throw new Error('User "' + name + '" not found.');
    }
  }

}