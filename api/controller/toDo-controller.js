//import service layer
import { request } from "express";
import * as toDoService from "../services/toDo-service.js";

const setSuccessResponse = (obj,response)=>{
    response.status(200);
    response.json(obj);
}

const setErrorResponse = (err,response) => {
    response.status(500);
    response.json(err);
}

//search by title
export const index = async(req, res) => {
    try{
        const title = req.query.title;
        const query = {};
        if(title){
            query.title = title;
        }
        const toDo = await toDoService.search(query);
        setSuccessResponse(toDo, res);

    }catch(error){
        setErrorResponse(error, res);
    }

}
// post new todo
export const post = async(req, res) => {
    try{
        const toDo = req.body;
        const savedToDo = await toDoService.save(toDo);
        setSuccessResponse(savedToDo,res);
    }catch(error){
        setErrorResponse(error.res);
    }

}

//get todo item by id
export const get = async(req, res) => {
    try{
        const id = req.params.id;
        const toDo = await toDoService.get(id);
        setSuccessResponse(toDo, res);
    }catch(error){
        setErrorResponse(error,res);
    }
}
//update todo item by id
export const update = async(req, res) => {
    try{
        const id = req.params.id;
        const updated = {...req.body};
        updated.id = id;
        console.log(updated);
        const toDo = await toDoService.put(updated);
        setSuccessResponse(toDo, res);
    }catch(error){
        setErrorResponse(error,res);
    }
    
}
//remove todo item by id
export const remove = async(req, res) => {
    try{
        const id = req.params.id;
        const toDo = await toDoService.remove(id);
        setSuccessResponse({message: `Successfully Removed ${id}` }, res);
    }catch(error){
        setErrorResponse(error, res);
    }
    
}