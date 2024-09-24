import { Router } from "express";
import { testFunction } from "../controllers/test";

const router = Router();

router.get("/", testFunction);

export default router;