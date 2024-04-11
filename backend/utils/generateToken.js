import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SEC, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d in miliseconds
    httpOnly: true, // no attacks via js
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development", // to be secure in https
  });
};

export default generateToken;
