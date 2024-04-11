import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json("No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SEC);

    if (!decoded) {
      return res.status(401).json("Invalid token");
    }

    const user = await User.findById(decoded.userId).select("-password"); //as in generateToken

    if (!user) {
      return res.status(404).json("User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json("Error in protectRoute midleware");
  }
};

export default protectRoute;
