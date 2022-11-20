//import {Router} from "express";
import express from "express";
import * as toDoController from "./../controller/toDo-controller.js";

const Route = express.Router();

//route to act all todo
Route.route("/toDo")
    .post(toDoController.post)
    .get(toDoController.index);

    //route to act on selected todo
Route.route("/toDo/:id")
    .get(toDoController.get)
    .put(toDoController.update)
    .delete(toDoController.remove);

export default Route;
