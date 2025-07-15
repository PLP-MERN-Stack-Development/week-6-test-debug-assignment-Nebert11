function logger(req, res, next) {
  // For demonstration, just call next()
  // In real use, you might log: console.log(`${req.method} ${req.url}`);
  req.logged = true; // For testability
  next();
}

module.exports = logger; 