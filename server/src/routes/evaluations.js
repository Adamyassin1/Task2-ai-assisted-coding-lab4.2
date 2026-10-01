import express from 'express';
import {
  createEvaluation,
  getAllEvaluations,
  getEvaluation,
  getEvaluationSummary,
} from '../controllers/evaluationController.js';

const router = express.Router();

router.post('/', createEvaluation);
router.get('/', getAllEvaluations);
// Must be declared BEFORE '/:id' or "summary" would be treated as an id.
router.get('/summary', getEvaluationSummary);
router.get('/:id', getEvaluation);

export default router;