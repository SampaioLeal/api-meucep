import { Router } from 'express';
import CEPsController from './controllers/CEPsController';
const router = Router();

router.get('/cep/:cep', CEPsController.details);

export default router;
