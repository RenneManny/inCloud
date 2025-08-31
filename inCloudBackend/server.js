import express from "express";
import cors from "cors"
import createUser from "./routes/userRoute.js";
import connectDb from "./db/dbConfig.js";


const app = express();
// using cors
app.use(cors());
// using for form data
app.use(express.json());
// connection databsae
connectDb();
//  --
app.use("/user", createUser);
app.listen(3000, () => {
  console.log("server is listening perfectly!");
});
