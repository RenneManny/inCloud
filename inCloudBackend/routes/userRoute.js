import express from "express";
// import getHome from "../controllers/testController.js"
import { createUser } from "../controllers/userControllers.js";

const router = express.Router();
// router.get("/",getHome);
router.post("/signup", createUser);
export default router;
