const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

const setCurrentDateTime = () => {
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16);
    taskDate.value = formattedDateTime;
};

const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            <span>${index + 1}. ${task.text} <span class="date">(${task.date})</span></span>
            <div>
                <button class="bg-cyan-300 px-2 py-1 hover:bg-[#35bd47] mb-1" onclick="markComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="bg-cyan-300 px-2 py-1 hover:bg-[#bdbb35] mb-1" onclick="editTask(${index})">Edit</button>
                <button class="bg-cyan-300 px-2 py-1 hover:bg-[#bd3535] mb-1" onclick="deleteTask(${index})">Delete</button>
            </div>
            `;
        taskList.appendChild(li);
    });
};

const addTask = () => {
    const text = taskInput.value.trim();
    const date = taskDate.value;

    if (text && date) {
        tasks.push({ text, date, completed: false });
        taskInput.value = '';
        setCurrentDateTime(); 
        renderTasks();
    }
};

const markComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

const editTask = (index) => {
    const task = tasks[index];
    taskInput.value = task.text;
    taskDate.value = task.date;
    tasks.splice(index, 1);
    renderTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

setCurrentDateTime();

addTaskButton.addEventListener('click', addTask);