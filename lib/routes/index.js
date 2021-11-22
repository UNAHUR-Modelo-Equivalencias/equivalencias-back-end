import express from 'express';
import usuarios from './usuario.js';

const router = express.Router();

router.use('/api/usuarios', usuarios);

export default router;
