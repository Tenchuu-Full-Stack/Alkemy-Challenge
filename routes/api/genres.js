const router = require('express').Router();

const { Genre } = require('../../db');


router.get('/', async (req, res) => {
    const genres = await Genre.findAll();
    res.json(genres);
    //res.send('Entra correctamente a Movies');
});


router.post('/', async (req, res) => {
    const genres = await Genre.create(req.body);
    res.json(genres);
})

module.exports = router;