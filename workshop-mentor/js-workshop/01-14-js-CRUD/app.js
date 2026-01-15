


const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');


// -----------------------------------------------------------
// Save to localStorage
const saveToLocalStorage = _ => {
    const nodeList = taskList.querySelectorAll('li'); // gaunam Node.list
    const nodeListToArray = [...nodeList]; // Node.List paverčiame į masyvą (array)
    const tasks = nodeListToArray.map(li => ({
        text: li.querySelector('span').textContent,
        completed: li.querySelector('.checkbox').checked
    }));

    localStorage.setItem('todos', JSON.stringify(tasks));
};

saveToLocalStorage();



// -----------------------------------------------------------
// Load from localStorage

const loadFromLocalStorage = _ => {
    const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    savedTasks.forEach(({ text, completed }) => addTask(text, completed));
};


// -----------------------------------------------------------
// CREATE
const addTask = (text, completed = false) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (!taskText) {
        return;
    }

    const li = document.createElement('li');
    // li.classList.add('.flex');
    // li.innerText = taskText;
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="taskButtons">
            <button class="editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `

    taskList.appendChild(li);
    taskInput.value = '';

    // -----------------------------------------------------------
    // UPDATE
    const editBtn = li.querySelector('.editBtn');
    const checkbox = li.querySelector('.checkbox');

    checkbox.addEventListener('change', _ => {
        editBtn.disabled = checkbox.checked;
        editBtn.style.pointerEvents = checkbox.checked ? 'none' : 'auto';
        editBtn.style.opacity = checkbox.checked ? '0.5' : '1';

        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        li.style.textDecorationThickness = '2px';
        li.style.textDecorationColor = 'black';
        saveToLocalStorage();
    });

    editBtn.addEventListener('click', _ => {

        if (!checkbox.checked) {
            taskInput.value = li.querySelector('span').textContent;
            li.remove();
        }

        saveToLocalStorage();
    });


    // -----------------------------------------------------------
    // DELETE
    li.querySelector('.deleteBtn').addEventListener('click', _ => {
        li.remove();
        saveToLocalStorage();
    });

    saveToLocalStorage();
};

addTaskBtn.addEventListener('click', e => {
    addTask(e);
});




