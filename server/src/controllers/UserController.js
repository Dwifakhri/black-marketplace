import User from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    return res
      .status(200)
      .json({ data: response, message: "Successfully get users" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
