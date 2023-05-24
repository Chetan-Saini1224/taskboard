import express from "express";
import task from "./task.js";
import list from "./list.js";
import user from "./user.js";
import {getBoardData } from "../../../controllers/api/v1/boardController.js";

const router = express.Router();

router.post("/",getBoardData);
router.use("/task", task);
router.use("/list", list);
router.use("/user", user);

export default router;
