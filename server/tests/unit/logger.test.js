const logger = require('../../middleware/logger');

describe('logger middleware', () => {
  it('should set req.logged to true and call next()', () => {
    const req = {};
    const res = {};
    const next = jest.fn();
    logger(req, res, next);
    expect(req.logged).toBe(true);
    expect(next).toHaveBeenCalled();
  });
}); 