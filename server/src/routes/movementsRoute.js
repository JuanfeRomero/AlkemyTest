import { Router } from 'express';
const router = Router();

//controllers
import * as movement from '../controllers/movementControllers'

router.get('/users',  movement.readMovements);

export default router;