const Task = require("../model/Task.js")




const createTaskService = async (data) => {
  try {
    const task = await Task.create(data);
  } catch (error) {
    console.error(error);
  }
};


const getAllTasksService = async ()=>{
	try{
		return await Task.findAll();
	}
	catch (error){
		console.error(error);
	}

}
const getTaskService = async (taskId) =>{
	try{
		const task = await Task.findByPk(taskId);
		return task ;
	}
	catch (error){
		console.error(error);
	}
}


const updateTaskService = async(data, taskId)=>{
	try{
		const task = await taskId.findByPk(taskId);
		task.title=data.title;
		task.description=data.description;
		task.priority=data.priority;
		task.category=data.category;
		task.due_data=data.due_data
		task.completion_status=data.completion_status;
		await taks.save();


	}
	catch(error) {
		console.error(error);

	}
}


const deleteTaskService = async (taskId) =>{
	try{
		await Task.destroy(taskId);
	}
	catch (error){
		console.error(error);
	}
}

module.exports={
	createTaskService,
	updateTaskService,
	deleteTaskService,
	getTaskService
}
