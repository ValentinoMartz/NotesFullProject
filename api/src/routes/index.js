const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require('axios');
const {Notes, Tags} = require("../db.js");

router.get('/test',async(req,res) => {
    res.status(200).send('El hombre lombriz le va a partir la cara a V******* M*******')
})

router.get('/nota', async (req,res) => {
    let notas = await Notes.findAll({
        include : {
            model : Tags,
            attributes : ['nombre'],
            through : {
                attributes : []
            }
        }
    })

    res.status(200).json(notas)
})

router.delete('/nota/:id', async(req,res) => {
    let {id} = req.params
    let destroyNote = await Notes.destroy({
        where : {
            id ,
        }
    })
    res.status(200).send('Borrado con exito, Tino')
})

router.post('/nota',async(req,res) => {
    let {titulo,  descripcion, tag} = req.body;

    let [nota,created] = await Notes.findOrCreate({
        where : {
            titulo ,
            descripcion,
        }

    })
    console.log(created, 'si sirvio')

    let tagBuscado = await Tags.findAll({
        where : {
            nombre : tag,
        }
    })

    nota.addTags(tagBuscado)

    res.status(200).json(nota)
})

router.post('/tags', async(req,res) =>{
    let {nombre} = req.body

    let [tag, created] = await Tags.findOrCreate({
        where : {
            nombre,
        }
    }) 

    res.status(200).json(tag)
})

module.exports = router;
