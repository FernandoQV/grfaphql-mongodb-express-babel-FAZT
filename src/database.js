import mongoose from "mongoose";

export async function connect() {
  await mongoose.connect("mongodb://localhost/mongographql1", {
    useNewUrlParser: true,
  });
}
