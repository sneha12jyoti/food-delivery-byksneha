import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://ksneha0212:SnehaBasu@cluster0.jf4ojze.mongodb.net/food-delivery'
    )
    .then(() =>console.log("DB Connected"));
};
