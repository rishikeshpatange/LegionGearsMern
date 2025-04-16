const User = require("../models/user-model");
const Order = require("../models/Order");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 }); // to get all users without password
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


const getAllUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Delted Successfuully" });
  } catch (error) {
    next(error);
  }
};


const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // latest first
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  deleteUserById,
  getAllUserById,
  updateUserById,
  getAllOrders
  
};
