import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting");
  }
};

export default connectToDB;
