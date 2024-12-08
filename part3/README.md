


implemented a simple restapi , wich provides almost all , what is asked

uesd the ORM sequelize , with in memory sqlite db for simplicity 

used a modular architucture  :  service , model , controller , to separte concerns and make the code clean , 


api endpoints ;
	post /tasks , to add some taks 
	get /tasks , to get all all the tasks 

	put /tasks/:id , to update some task with data contained in the request body 

	delete : tasks/;id , to delete some task 


	to run : 
		clone the project , 
		move into the project 
		npm install , to download all dependencies 
		node server.js to run the project 


