import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController'

const router = Router();

router.post('/ping', ApiController.login);
router.get('/contato', EmailController.contato);

export default router;