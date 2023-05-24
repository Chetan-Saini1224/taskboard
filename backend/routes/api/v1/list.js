import express from "express";
import { createList } from "../../../controllers/api/v1/listController.js";


const router = express.Router();

router.post("/create", createList);

export default router;