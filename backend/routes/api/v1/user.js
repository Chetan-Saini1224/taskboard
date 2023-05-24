import express from "express";
import { login,signup,getUser } from "../../../controllers/api/v1/userController.js";

const router = express.Router();

router.get("/:id",getUser);
router.post("/login",login);
router.post("/signup",signup);

export default router;