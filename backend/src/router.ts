import express from "express";
import { loan } from "./controllers/loanController";
import { loanValidation } from "./middlewares/loanValidation";

const router = express.Router();

router.post("/customer-loans", loanValidation, loan);

export default router;
