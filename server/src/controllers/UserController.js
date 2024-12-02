import User from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    const sanitizedUsers = users.map(({ password, ...user }) => user);

    return res
      .status(200)
      .json({ data: sanitizedUsers, message: "Successfully get users" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
