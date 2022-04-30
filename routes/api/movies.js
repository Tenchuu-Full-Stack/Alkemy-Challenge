const router = require('express').Router();

const { Movie } = require('../../db');


router.get('/', async (req, res) => {
    const movies = await Movie.findAll();
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

router.get('/:filmId', (req, res) => {
    console.log("Pelicula obtenida");// AQUÍ dentro la query sobre sequelize con req.params.filmId
});

router.delete('/:filmId', async (req, res) => {
    await Movie.destroy({
        where: {
            id: req.params.filmId
        }
    });
    res.json({ success: "Se ha eliminado la pelicula" });
});
module.exports = router;