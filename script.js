function showMenu() {
    const menu = document.querySelector('.menuBar');
    menu.classList.toggle('hidden');
};

function displayNewTaskForm() {
    const newTaskForm = document.querySelector('.newToDo');
    newTaskForm.classList.toggle('hidden');
};


function newTask() {
    event.preventDefault();

    a = document.querySelector('#main2');

    taskDiv = document.createElement('div');
    taskDiv.className = "task";
    
    a.appendChild(taskDiv);

    const titleText = document.querySelector('#title').value;

    title = document.createElement('h3');
    title.className = "taskTitle";
    title.textContent = titleText;

    taskDiv.appendChild(title);

    const descriptionText = document.querySelector('#description').value; 

    description = document.createElement('p');
    description.className = "taskDescription";
    description.textContent = descriptionText; 

    taskDiv.appendChild(description);

    const urgentDiv = document.createElement('div');
    urgentDiv.className = "urgentDiv";
        urgentDiv.onclick = function() {
            urgentText.classList.toggle("notUrgent");
            urgentText.classList.toggle("urgent");
            if (urgentText.textContent === "Urgent") {
                urgentText.textContent = "Not Urgent";
            }
            else if (urgentDiv.textContent === "Not Urgent") {
                urgentText.textContent = "Urgent";
            }
        };
    taskDiv.appendChild(urgentDiv);

    const urgentText = document.createElement('p');
    urgentText.className = "urgent"
    urgentText.textContent = 'Urgent';

    urgentDiv.appendChild(urgentText);

    completeBTN = document.createElement('div');
    completeBTN.className = "completeBTN"
    completeBTN.innerHTML = '<button class="completeBTN" onclick="completeTask()">Complete Task</button>'
    
    completeBTN.onclick = function() {
        this.parentNode.remove(this);
    };

    taskDiv.appendChild(completeBTN);


};

function completeTask() {
    console.log('Task Completed!');
};

function displayNewProjectForm() {
    const newProjectForm = document.querySelector('.newProjectDiv');
    newProjectForm.classList.toggle('hidden');
};   

function newProject() {
    event.preventDefault();

    const projectsDiv = document.querySelector('#projectsDiv'); 
   
    projectDiv = document.createElement('div');
    projectDiv.className = 'project'

    projectsDiv.appendChild(projectDiv);

    const projectName = document.querySelector('#projectName').value;
    
    projectTitle = document.createElement('h3');
    projectTitle.className = 'projectTitle';
    projectTitle.textContent = projectName;

    projectDiv.appendChild(projectTitle);

    projectTask = document.querySelector('#projectTask').value;

    firstProjectTask = document.createElement('p');
    firstProjectTask.className = 'projectTask';
    firstProjectTask.textContent = projectTask;
 /*   firstProjectTask.innerHTML = `<p onclick="lineThrough()" class="projectTask"> ${projectTask}</p>`;

        firstProjectTask.onclick = function() {
            firstProjectTask.classList.toggle("lineThrough");
        };
*/
    projectDiv.appendChild(firstProjectTask);

   /* 
    const newTaskInput = document.createElement('input');

    newTaskInput.type = "text";
    newTaskInput.placeholder = "New Task";
    newTaskInput.classList = "newTaskInput";

    projectDiv.appendChild(newTaskInput);
*/

    completeProjectBTN = document.createElement('div');
    completeProjectBTN.className = "completeProjectBTN"
    completeProjectBTN.innerHTML = '<button class="completeProjectBTN" onclick="completeTask()">Complete Project</button>'
    
    completeProjectBTN.onclick = function() {
        this.parentNode.remove(this);
    };

    projectDiv.appendChild(completeProjectBTN);

    console.log(projectName);
};

/*
function lineThrough() {
    const p = document.querySelector('projectTask');
    p.classList.toggle("lineThrough");
};

const projectTasks = document.querySelector(".projectTask").addEventListener('click', () => {
    this.classList.toggle("lineThrough");
});
*/