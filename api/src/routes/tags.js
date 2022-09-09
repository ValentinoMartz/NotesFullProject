const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Notes, Tags } = require("../db.js");

//GET ALL TAGS
router.get("/", async (req, res) => {
  let tags = await Tags.findAll();

  res.status(200).json(tags);
});

//POST TAG
router.post("/", async (req, res) => {
  let { nombre } = req.body;

  let [tag, created] = await Tags.findOrCreate({
    where: {
      nombre,
    },
  });
  console.log("Tag created?", created);

  res.status(200).json(tag);
});

//DELETE TAG
router.delete("/:tag_id", async (req, res) => {
  let { tag_id } = req.params;

  let destroyTag = await Tags.destroy({
    where: {
      tag_id,
    },
  });
  res.status(200).json("Tag borrado"); //destroyTag--> Anda bien, lo unico no muestra el objeto borrado.
});

//EDIT TAG
router.put("/:tag_id", async (req, res) => {
  let { tag_id } = req.params;
  let { nombre } = req.body;

  let editTag = await Tags.findOne({
    where: {
      tag_id,
    },
  });

  await editTag.set({ nombre: nombre });
  await editTag.save();
  res.status(200).json(editTag); // Anda bien, lo unico no muestra el objeto borrado.
});

module.exports = router;
