import User from "../models/user.model.js";

export const getSideBarUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); // except the logged in user

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Error in getSideBarUsers" });
  }
};
