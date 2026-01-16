


const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');

const toDoForm = document.querySelector('#toDoForm');

// Neleidžiame puslapiui refreshintis, kai pridedam task'ą. Taip pat leidžia pridėti task'ą su ENTER button
toDoForm.addEventListener('submit', e => {
    e.preventDefault();
    addTask();
});


// -----------------------------------------------------------
// Save to localStorage
const saveToLocalStorage = e => {
    const nodeList = taskList.querySelectorAll('li'); // gaunam Node.list
    const nodeListToArray = [...nodeList]; // Node.List paverčiame į masyvą (array)
    const tasks = nodeListToArray.map(li =>
    (
        {
            task_text: li.querySelector('span').textContent,
            task_status: li.querySelector('.checkbox').checked
        }
    ));

    localStorage.setItem('todos', JSON.stringify(tasks));
};



// -----------------------------------------------------------
// Load from localStorage

const loadFromLocalStorage = _ => {
    const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    savedTasks.forEach(({ task_text, task_status }) => addTask(task_text, task_status));
};


// -----------------------------------------------------------
// CREATE
const addTask = (task_text, task_status = false) => {

    const taskText = task_text || taskInput.value.trim();

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

    if (task_status) {
        checkbox.checked = true;
        editBtn.disabled = true;
        editBtn.style.pointerEvents = 'none';
        editBtn.style.opacity = '0.5';

        li.style.textDecoration ='line-through';
        li.style.textDecorationThickness = '3px';
        li.style.textDecorationColor = 'crimson';
    }


    checkbox.addEventListener('change', _ => {
        editBtn.disabled = checkbox.checked;
        editBtn.style.pointerEvents = checkbox.checked ? 'none' : 'auto';
        editBtn.style.opacity = checkbox.checked ? '0.5' : '1';

        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        li.style.textDecorationThickness = '3px';
        li.style.textDecorationColor = 'crimson';
        saveToLocalStorage();
    });

    editBtn.addEventListener('click', _ => {

        if (!checkbox.checked) {
            taskInput.value = li.querySelector('span').textContent;
            li.remove();
            saveToLocalStorage();
        }

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
    e.preventDefault();
    addTask();
});

loadFromLocalStorage();


