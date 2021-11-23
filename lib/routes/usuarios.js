import express from 'express';

import { getUsuario, index, show } from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getUsuario));
router.get('/:id', withErrorHandling(show));

router.put('/:id', withErrorHandling(show));

export default router;
