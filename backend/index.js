import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSendRouter from "./route/sendEmailRoute.js";
const app = express();
app.use(cors());
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down server due to uncaught expection`);
  process.exit(1);
});
dotenv.config();

app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(cookieParser());
app.use("/api/v2", EmailSendRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running PORT:${process.env.PORT} `);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting Down server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
