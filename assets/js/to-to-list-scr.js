'use strict';


const taskList = document.querySelector('.taskList')

const inputEl = document.querySelector('.inputTask')
const addTaskBtn = document.querySelector('.addTaskBtn')


function addTask(){
    if(inputEl.value){
        const taskEl = createTaskEl()
        const taskContent = createTaskContent()
        const trashIcon = createTrashIcon()
        taskEl.append(taskContent, trashIcon)
        taskList.append(taskEl)
        clearInput()
    }
    else{
        alert('Будь ласка, введіть завдання')
    }
}

function createTaskEl(){
    const li = document.createElement('li')
    li.classList.add('task')
    return li
}
function createTaskContent(){
    const task = document.createElement('p')
    task.textContent = inputEl.value
    return task
}
function createTrashIcon(){
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid', 'fa-trash', 'trash-icon')
    trashIcon.addEventListener('click', deleteTask)
    return trashIcon
}
function clearInput(){
    inputEl.value = ''
}
function deleteTask(e){
    e.target.closest('.task').remove()
}

addTaskBtn.addEventListener('click', addTask)
