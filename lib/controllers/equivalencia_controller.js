const EQUIVALENCIA_FIJA = {
    id_equivalencia: 0,
    descripcion: 'Solicitud Objetos 1',
    fecha_hora: '19/11/2021 18:00',
    estado: 'Aceptado'
}

export const getEquivalencia = async (req, res) => {
    const equivalenciaId = req.params.id;
    res.json({ id: equivalenciaId, ...EQUIVALENCIA_FIJA });
}