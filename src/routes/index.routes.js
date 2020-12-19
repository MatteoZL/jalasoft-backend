import express from 'express';
import * as controller from '../controllers/index.controller.js'

const router = express.Router();

router.post("/stats", controller.stats);

router.post("/translate" , controller.translate);

export default router;
