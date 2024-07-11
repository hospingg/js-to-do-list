'use strict';


const taskList = document.querySelector('.taskList')
const inputEl = document.querySelector('.inputTask')
const addTaskBtn = document.querySelector('.addTaskBtn')


const dataList = []
function addTask(){
    if(inputEl.value){
        addData()
        updateTasks()
        clearInput()
    }
    else{
        alert('Будь ласка, введіть завдання')
    }
}
function addData(){
    dataList.push(inputEl.value)
}
function createTaskEl(){
    const li = document.createElement('li')
    li.classList.add('task')
    return li
}
function createTaskContent(taskValue){
    const task = document.createElement('p')
    task.textContent = taskValue
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
    const currectTask = e.target.closest('.task')
    const currectItem = currectTask.querySelector('p').textContent
    dataList.splice(dataList.findIndex(item => item === currectItem), 1)
    updateTasks()
    // or currectTask.remove()
}

function updateTasks(){
    taskList.innerHTML = ""
    dataList.forEach(item =>{
        const taskEl = createTaskEl()
        const taskContent = createTaskContent(item)
        const trashIcon = createTrashIcon()
        taskEl.append(taskContent, trashIcon)
        taskList.append(taskEl)
    })
}

addTaskBtn.addEventListener('click', addTask)