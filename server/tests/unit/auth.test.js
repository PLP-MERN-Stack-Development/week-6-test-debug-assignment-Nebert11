const { generateToken } = require('../../utils/auth');

describe('generateToken', () => {
  it('should return a string token for a user object', () => {
    const user = { id: '123', username: 'testuser' };
    const token = generateToken(user);
    expect(typeof token).toBe('string');
    expect(token).toBe('dummytoken');
  });
}); 