import toDoRouter from "./toDo-routes.js";

//root index
export default(app)=>{
    app.use('/',toDoRouter);
}
