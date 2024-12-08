

const {
	createTaskService,
	updateTaskService,
	deleteTaskService,
	getTaskService
} = require("../service/TaskService.js")


const createTaskController = async (req,res)=>{
	try{
		const data= req.body;
		console.losg("data : " + data);
		await createTaskService(data);
		res.json(data)
	}catch(error){
		console.error(error);
	}

}

const getTaskController = async (req ,res)=>{
	try{
		const {taskId} = req.param
		const task = await getTaskService(taskId);
		res.json(task);

	}catch(error){
		console.error(error);
	}
}


const updateTaskController = async (req ,res)=>{
	try{
		const data = req.body
		const {taskId} = req.param
		await updateTaskService(data,taskId);
		res.json({"message":"ok"})

	}catch(error){
		console.error(error);
	}
}

const deleteTaskController = async (req ,res)=>{
	try{
		const {taskId} = req.param
		await deleteTaskService(data,taskId);
		res.json({"message":"ok"})

	}catch(error){
		console.error(error);
	}
}

module.exports = {
	createTaskController,
	getTaskController,
	updateTaskController,
	deleteTaskController
}

