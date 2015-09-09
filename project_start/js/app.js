//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); //newTask
var addButton = document.getElementsByTagName("button")[0]; //firstButton
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks
 
//Add a new task
var addTask = function() {
	console.log("Add task...");
	//When the button is pressed
		//Create a new list item with the text from #new-task
			//input {checkbox}
			//label
			//input {text}
			//button.edit
			//button.delete
			//Each element needs modified and appended
}


//Edit an existing task
var editTask = function() {
	console.log("Edit task...");
	//When the Edit button is pressed
		//if the parent hasClass .editMode
			//Switch from editMode
			//label text become the input's value
		//else
			//switch to editMode
			//input value becomes the label's text
		
		//Toggle .editMode ^^	
}		

//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	//When the Delete button is pressed
		//remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("Complete task...");
	//When the checkbox is checked
		//Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks
}

//Set the click handlers to the addTask function
addButton.onclick = addTask; 