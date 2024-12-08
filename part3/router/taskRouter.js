const express =require("express")

const {
	createTaskController,
	getTaskController,
	updateTaskController,
	deleteTaskController
} = require("../controller/TaskController.js")


const router =express.Router();


router.route("/tasks").get(getTaskController).post(createTaskController);

router.route("/tasks/:id").delete(deleteTaskController).put(updateTaskController);

module.exports = router ;