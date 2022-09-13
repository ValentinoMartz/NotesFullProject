const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const notas = require("./notas");
const tags = require("./tags");

router.use("/notas", notas);
router.use("/tags", tags);

module.exports = router;
