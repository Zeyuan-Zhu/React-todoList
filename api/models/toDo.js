import mongoose from "mongoose";


//modle of todo item detail
const schema = new mongoose.Schema({
    title: {
        type: String,
        required:"The title is required"
    },
    discription: {
        type: String,
        required: "the discription is required"
    },
    status: {
        type: Boolean,
        default : false  
    },
    dueDate: {
        type: Date,
        required: "the DueData is required"
    },
    dueTime: {
        type: String,
        required: "the DueTime is required"
    },

   
      
},{timestamps : true})

//collection name
const model = mongoose.model('testCollection',schema);
export default model;
