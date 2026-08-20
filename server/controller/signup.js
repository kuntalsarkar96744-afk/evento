const model = require('../modules/model');
const bcrypt = require('bcryptjs');  // recommended for hashing passwords

// Signup Controller
const signupUser = async (req, res) => {
  try {
    const { username, password } = req.body;  // better to use body instead of query

    if (!username || !password) {
      return res.status(400).json("Username and password are required");
    }

    // Check if user already exists
    const existingUser = await model.findOne({ username });
    if (existingUser) {
      return res.status(409).json("User already exists");
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new model({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
};

module.exports = { signupUser };
