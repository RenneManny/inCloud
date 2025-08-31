import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akhil:CwnBVD89tYLJOnlN@incloud.vje2ogi.mongodb.net/"
    );
    console.log("Database connected successfully !");
  } catch (err) {
    console.log("Error in db connetion:", err);
  }
};
export default connectDb;
