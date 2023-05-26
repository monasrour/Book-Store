const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require("../Middleware/auth");
const userController = require('../controllers/userController')
const User = require("../models/user");
const router=express.Router();

router.post('/user' , userController.add )
router.get('/user' , userController.list )
router.get('/user/:id' , userController.getById )
router.delete('/user/:id' , userController.remove )
router.put('/user/:id' , userController.edit )

// Register
router.post("/register",async (req, res) => {
     // Our register logic starts here
  try {
    // Get user input
    const { firstName, lastName,age, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
     return res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
    });




    
    // Login
 router.post("/login", async(req, res) => {
   // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
     return res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
    });


    router.post("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome 🤗❤");
        
      });

module.exports = router;