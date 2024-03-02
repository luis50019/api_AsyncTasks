/*this page has the functions of the end-points for controlling of the task of the users  */
import Task from '../models/task.model.js';

export const createTask = async (req, res) => {

    const { nametask, description, deadline} = req.body;

    const newTask = new Task({
        nametask,
        section: 'start',
        description,
        deadline,
        user: req.user.id
    });

    const saveTask = await newTask.save();
    res.json(saveTask);
}

export const getTasks = async (req,res)=>{

   try {
        const task = await Task.find({
            user: req.user.id
        }).populate('user');

        res.json(task);
    } catch (error) {
        return res.status(500).json({message: "Sometihings went wrong"});
    }
};

export const getTask = async(req,res)=>{

    try {
        
        console.log(req.params.id);
        const task = await Task.findById(req.params.id).populate('user');
        if (!task) return res.status(400).json({message: 'Task not found'});
        return res.json(task);

    } catch (error) {

        console.log(error);
    }
}

export const updateTask = async (req,res) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!task) return res.status(400).json({message: 'Task not update'})
        res.status(200).json(task);

    } catch (error) {
        return res.status(500).json({message: "Error in the moment of update task"});
    }
}

export const updateSectionTask = async (req,res) =>{
    const sections = {
        "start": "progress",
        "progress": "Done"
    }
    try {
        const newSection = sections[req.params.section];
        const task = await Task.findByIdAndUpdate(req.params.id,{section: newSection },{new: true});
        if(!task) return res.status(400).json({message: 'Tasks no update of section'});
        res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({message: "Error in the moment of update section of the taks"});
    }
}

export const deleteTask = async (req,res)=>{

    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({menssage: 'Taks not found'});
        return res.sendStatus(204);
        
    } catch (error) {
        return res.status(404).json({message: "Task nor found"});
    }

}

/*
this function is responsible for counting each of the tasks of 
each user and return an object with the number of tasks of each section, this returns this information to send it to the user by mail.
*/

export const getTasksEmail = async(user)=>{
    try {
      const taskUser = await Task.find({
        user: user._id
      }).populate('user');

      const sectionCounts = {
        "start": 0,
        "progress": 0,
        "Done":0
      }

      if(taskUser.length !== 0){

        taskUser.map((task)=>{
            sectionCounts[task.section] +=1;
        })
        return sectionCounts;
      }

      return sectionCounts;

    } catch (error) {
      console.log("hubo un fallo");
    }
}
