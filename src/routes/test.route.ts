import express from "express";
import { getUserByIdController } from "../controllers/test.controller";

const router = express.Router();

router.route("/:id").get(getUserByIdController);

export default router;
