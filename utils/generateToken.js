const jwt = require('jsonwebtoken');

/**
 * Generates a JWT for the user.
 * @param {string} userId - The user's unique ID.
 * @returns {string} - The generated JWT.
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;
