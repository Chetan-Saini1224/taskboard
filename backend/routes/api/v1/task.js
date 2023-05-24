import express from "express";
import { createTask,deleteTask } from "../../../controllers/api/v1/listController.js";

const router = express.Router();

router.post("/create",createTask);
router.delete("/:id", deleteTask);

export default router;
