SELECT setval(
  pg_get_serial_sequence('docente', 'id'),
  GREATEST(COALESCE((SELECT MAX(id) FROM "docente"), 0) + 1, 1),
  false
);

SELECT setval(
  pg_get_serial_sequence('administrativo', 'id'),
  GREATEST(COALESCE((SELECT MAX(id) FROM "administrativo"), 0) + 1, 1),
  false
);

SELECT setval(
  pg_get_serial_sequence('auxiliar', 'id'),
  GREATEST(COALESCE((SELECT MAX(id) FROM "auxiliar"), 0) + 1, 1),
  false
);
