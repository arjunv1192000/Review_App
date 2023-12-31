import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = async (config) => {
  try {
    await mongoose.connect(config.uri);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
