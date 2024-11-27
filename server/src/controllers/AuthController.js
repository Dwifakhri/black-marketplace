import User from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ message: "Wrong email/password" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(400).json("Wrong email/password");
    }

    const response = user.get();
    const token = jwt.sign(
      { ...response, password: undefined, email: undefined },
      process.env.JWT_SECRET,
      { expiresIn: 7 * 24 * 60 * 60 }
    );
    return res.status(200).json({ jwt: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const authMe = async (req, res) => {
  const token = req.headers.authorization.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: payload.id } });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const response = user.get();
    return res.status(200).json({ ...response, password: undefined });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};