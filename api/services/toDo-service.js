import ToDo from "./../models/toDo.js";

// to create new to do item
export const save = async (toDoItem) =>{
    const newToDo = new ToDo(toDoItem);
    return newToDo.save();
};

//find all todo
export const search = async (query) =>{
    const params = {...query};
    const toDo = ToDo.find(params).exec();
    return toDo;
};

// find todo by id
export const get= async (id) =>{
    const toDo = ToDo.findById(id).exec();
    return toDo;
};

//update todo item by id
export const put = async (updatedToDo) =>{
    updatedToDo.modifiedData = new Date();
    const toDo =ToDo.findByIdAndUpdate(updatedToDo.id, updatedToDo,{new:true} ).exec();
    return toDo;
};
//remove todo item by id
export const remove = async (id) =>{
    const toDo = ToDo.findByIdAndDelete(id).exec();
    return toDo
};