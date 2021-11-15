
let addTaskBtn = document.getElementById("btn");
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

addTaskBtn.addEventListener("click", function () {
	if (taskInput.value) {
		addNewItem();
	} else {
		modal('You can not add an empty field')
	}
});

function addNewItem() {
	let newTask = document.createElement("li");
	newTask.textContent = taskInput.value;
	taskInput.value = "";
	taskList.append(newTask);

	let removeTaskBtn = document.createElement("button");
	removeTaskBtn.style.height = "12px";
	removeTaskBtn.style.width = "12px";
	removeTaskBtn.style.marginRight = "5px";
	newTask.prepend(removeTaskBtn);

	removeTaskBtn.addEventListener("click", function () {
		if (taskList.childElementCount > 1) {
			newTask.parentNode.removeChild(newTask);
		} else {
			modal('You can not delete last lask.')
		}
	});
}




function modal(item) {
	let modal = document.getElementById('mypopup');
	modal.style.display = 'block';

	let modalInfo = document.querySelector('.body-info');			
	modalInfo.textContent = item;
	
	let popupClose = document.querySelector('.close');
	popupClose.onclick = function () {
		modal.style.display = 'none'
	}
}

