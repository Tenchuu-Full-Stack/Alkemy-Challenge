const router = require('express').Router();

const { Movie } = require('../../db');


router.get('/', async (req, res) => {
    const movies = await Movie.findAll({
        attributes: ["imagen", "titulo", "fechaDeCreacion"]
    });
    res.json(movies);
    //res.send('Entra correctamente a Movies');
});


router.post('/', async (req, res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
}) 


router.put('/:movieId', async (req, res) => {
    await Movie.update(req.body, {
        where: { id: req.params.movieId }
    });
    res.json({ success: "Pelicula actualizada" });
});

router.get('/:movieId', async (req, res) => {
    const movie = await Movie.findOne({ 
        where: { id: req.params.movieId },
    attributes: ["imagen", "titulo", "calificacion", "fechaDeCreacion"] });
    res.json(movie);
    console.log("Pelicula obtenida");// 
});

router.delete('/:movieId', async (req, res) => {
    await Movie.destroy({
        where: {
            id: req.params.movieId
        }
    });
    res.json({ success: "Se ha eliminado la pelicula" });
});
module.exports = router;