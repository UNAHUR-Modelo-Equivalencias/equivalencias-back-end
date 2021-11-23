import Universidad_origen from '../models/universidad_origen';

export const index = async (req, res) => {
  const universidad_origen = await Universidad_origen.findAll({});
  res.json({
    data: universidad_origen.map((universidad_origen) =>
      universidad_origen.toJSON()
    ),
  });
};

export const show = async (req, res) => {
  const universidad_origen = await Universidad_origen.findByPk(req.params.id);
  if (universidad_origen) {
    res.json({ data: universidad_origen.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró un Universidad con id ${req.params.id}`,
    });
  }
};
