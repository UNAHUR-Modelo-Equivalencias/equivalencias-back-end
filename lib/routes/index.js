import express from 'express';
import usuarios from './usuarios';
import equivalencias from './equivalencias';
import estados from './estados';
import materiasAprobadas from './materiasAprobadas';
import materiasSolicitadas from './materiasSolicitadas';
import universidadesOrigen from './universidadesOrigen';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/equivalencias', equivalencias)
// router.use('/api/estados', estados);
// router.use('/api/materiasAprobadas', materiasAprobadas);
// router.use('/api/materiasSolicitadas', materiasSolicitadas);
// router.use('/api/universidadesOrigen', universidadesOrigen);

export default router;
