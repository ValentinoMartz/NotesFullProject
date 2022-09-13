const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
const { Notes, Tags } = require("../db.js");


let createTag = async(nombre) => {

  let [tag, created] = await Tags.findOrCreate({
    where: {
      nombre : nombre,
    },
  });

  return tag
}

//GET ALL
router.get("/", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let destroyNote = await Notes.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Borrado con exito, Vale");
});

//POST NOTA -- si no tiene etiqueta no funca
router.post("/", async (req, res) => {
  let { titulo, descripcion, tag } = req.body;

  let [nota, created] = await Notes.findOrCreate({
    where: {
      titulo,
      descripcion,
    },
  });

  let result = await createTag(tag)

 let add = await nota.addTags(result);
  

  res.status(200).json(nota);
});

router.put("/:id", async (req, res) => {
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

    res.status(200).json(editNota); //
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
