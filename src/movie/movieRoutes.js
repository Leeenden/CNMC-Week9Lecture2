const { Router } = require("express");
const { addMovie, listMovies } = require("./movieController");

const movieRouter = Router();

// use http verb "post" to add data to our movie 
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);

module.exports = movieRouter;