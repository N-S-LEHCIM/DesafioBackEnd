import express from "express";
import userRouter from "./routes/users.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listenig on ${PORT}`));
//!-------------- --------------
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
//!-------------- --------------
