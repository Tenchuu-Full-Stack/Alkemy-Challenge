const router = require('express').Router();


const middleware = require('./api/middlewares');
const apiMoviesRouter = require('./api/movies');
const apiUsersRouter = require('./api/users');
const apiCharactersRouter = require('./api/characters');
const apiGenresRouter= require('./api/genres');

router.use('/movies', middleware.checkToken, apiMoviesRouter);
router.use('/characters', apiCharactersRouter);
router.use('/genres', apiGenresRouter);
router.use('/auth', apiUsersRouter);
module.exports = router;