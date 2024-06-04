import express from "express";
import sendEmailControllers from "../controllers/sendEmailControllers.js";

const route = express.Router();

route.post("/send", sendEmailControllers.sendEmailCreate);

export default route;
