const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home = (req, res) => {
  res.status(200).send("Welcome to home");
};


const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, password, phone });

    res.status(201).send({
      msg: userCreated,
      msg: "registration succesful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return req.status(400).json({ message: "Invalid credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).send({
        msg: "Login succesful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email and password" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const user = async(req, res)=>{
  try {
    const userData = req.user;
    console.log(userData)
    return res.status(200).json({userData})
    
  } catch (error) {
    console.log(`error from the user route ${error}`)
    
  }
}


module.exports = { register, home, login, user };