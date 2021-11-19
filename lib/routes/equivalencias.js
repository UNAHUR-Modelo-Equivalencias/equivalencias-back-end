import express from 'express';

import { getEquivalencia } from '../controllers/equivalencia_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

// router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getEquivalencia));

export default router;  