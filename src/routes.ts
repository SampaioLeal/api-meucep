import { Router } from 'express';
import CEPsController from './controllers/CEPsController';
import HistoryController from './controllers/HistoryController';
const router = Router();

router.get('/cep/:cep', CEPsController.details);
router.get('/history', HistoryController.list);

export default router;
