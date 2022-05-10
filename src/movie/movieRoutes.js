// require Router 
const { Router } = require("express");
// require CRUd fucntions form movieController file
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieController");
// assign Router fucntion to a variable
const movieRouter = Router();

// use http verb "post" to add data to our movie 

// route for movie page and addign movie
movieRouter.post("/movie", addMovie);
// route for lsiting users
movieRouter.get("/movie", listMovies);
// route for updating user
movieRouter.patch("/movie", updateMovie);
// route for deleting user
movieRouter.delete("/movie", deleteMovie);

// exports
module.exports = movieRouter;