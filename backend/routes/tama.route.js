import express from 'express';
import { getTama, createTama, updateTama, deleteTama } from '../controllers/tama.controller.js';

const router = express.Router();

router.get("/", getTama);

router.post("/", createTama);

router.put("/:id", updateTama);

router.delete("/:id", deleteTama);


export default router;