const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");

router.get("/test", async (req, res) => {
  res.status(200).send("El hombre lombriz le va a partir la cara a V** M**");
});

module.exports = router;
