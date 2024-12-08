var express = require("express")



var server=express();

const sequelize = require("./config/db.js")

const port = 3000;


const taskRouter = require("./router/taskRouter.js")




server.use(express.json());

server.use(taskRouter)
server.get("/",(req,res)=>{
	res.send("hello user");
})


try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


server.listen(port,()=> {
	console.log(`listening on port ${port}`);
})