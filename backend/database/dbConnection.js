import mongoose from "mongoose";

export const dbConnection = () => {
  console.log('Attempting to connect to the database with URI:', process.env.MONGO_URI);

  mongoose.connect(process.env.MONGO_URI, {
    dbName: "MERN_STACK_JOB_SEEKING",
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to database: ${err.message}`);
  });
};
