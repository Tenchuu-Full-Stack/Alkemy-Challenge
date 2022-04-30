const router = require('express').Router();


const middleware = require('./api/middlewares');
const apiMoviesRouter = require('./api/movies');
const apiUsersRouter = require('./api/users');

router.use('/movies', middleware.checkToken, apiMoviesRouter);
router.use('/auth', apiUsersRouter);
module.exports = router;