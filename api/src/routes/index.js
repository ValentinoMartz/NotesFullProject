const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Notes, Tags } = require("../db.js");

router.get("/test", async (req, res) => {
  res.status(200).send("Working...");
});

//GET ALL
router.get("/nota", async (req, res) => {
  let notas = await Notes.findAll({
    include: {
      model: Tags,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
  });

  res.status(200).json(notas);
});

//DELETE NOTA
router.delete("/nota/:id", async (req, res) => {
  let { id } = req.params;
  let destroyNote = await Notes.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Borrado con exito, Vale");
});

//POST NOTA
router.post("/nota", async (req, res) => {
  let { titulo, descripcion, tag } = req.body;
  let [nota, created] = await Notes.findOrCreate({
    where: {
      titulo,
      descripcion,
    },
  });
  console.log(created, "si sirvio");
  //trambolico
  let tagBuscado = await Tags.findAll({
    where: {
      nombre: tag,
    },
  });
  console.log(tagBuscado);
  nota.addTags(tagBuscado);

  res.status(200).json(nota);
});

router.put("/notas/:id", async (req, res) => {
  let { id } = req.params;
  let { titulo, descripcion, tag, archivado } = req.body;

  let editNota = await Notes.findOne({
    where: {
      id,
    },
  });
  try {
    await editNota.set({
      titulo: titulo,
      descripcion: descripcion,
      archivado: archivado,
    });
    await editNota.save();

    /*  let tagBuscado = await Tags.findOne({
      where: {
        nombre: tag,
      },
    });

    await tagBuscado.update({where:{
      nombre: tag
    }}); */

    res.status(200).json(editNota); // Anda bien, lo unico no muestra el objeto borrado.
  } catch (err) {
    res.status(400).json(err);
  }
});

//-------------- Linita separadora de rutas, la profecia dice que el que lea esto debe modulalizarlo -----

//GET ALL TAGS
router.get("/tags", async (req, res) => {
  let tags = await Tags.findAll();

  res.status(200).json(tags);
});

//POST TAG
router.post("/tags", async (req, res) => {
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
router.delete("/tags/:tag_id", async (req, res) => {
  let { tag_id } = req.params;

  let destroyTag = await Tags.destroy({
    where: {
      tag_id,
    },
  });
  res.status(200).json(destroyTag); // Anda bien, lo unico no muestra el objeto borrado.
});

//EDIT TAG
router.put("/tags/:tag_id", async (req, res) => {
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
