import { ca } from "date-fns/locale";
import { projects } from "./index";
import { editTodoItem } from "./todo";

// let p= [...projects];
// console.log("projecst " , projects.length)
// console.log("projecst " , projects)

let defaultSidebarEl = document.querySelectorAll(".default div");

let projectSidebarEl = document.querySelector(".projects li");

let todoItemsListEl = document.querySelector(".items-list");

let createTodoDomEl = (title, description, date, id, priority, isDone, project="inbox") => {
    let todoItemEl = document.createElement("li");
    todoItemEl.setAttribute("class", "todo-item");

    // todoItemEl.append(breakEl);
    
    let itemEl = document.createElement("div");
    itemEl.setAttribute("class", "item");

    todoItemEl.append(itemEl);

    let inputEl = document.createElement("input");
    inputEl.classList.add("todo-check")
    inputEl.setAttribute("type", "checkbox");
    inputEl.setAttribute("name", "list");
    itemEl.append(inputEl);

    let itemDetailEl = document.createElement("div");
    itemDetailEl.setAttribute("class", "item-detail");
    itemEl.append(itemDetailEl);

    let titleLineEl = document.createElement("div");
    titleLineEl.setAttribute("class", "title-line");
    itemDetailEl.append(titleLineEl);

    let itemTitleEl = document.createElement("div");
    itemTitleEl.setAttribute("class", "item-title");
    itemTitleEl.innerText = title;
    titleLineEl.append(itemTitleEl);

    let editDeleteEl = document.createElement("div");
    let edit = document.createElement("div");
    edit.classList.add("edit");
    edit.innerText = "edit";
    let deleteI = document.createElement("div");
    deleteI.classList.add("delete");
    deleteI.innerText = "delete";
    editDeleteEl.classList.add("edit-delete");
    editDeleteEl.append(edit);
    editDeleteEl.append(deleteI);
    titleLineEl.append(editDeleteEl);

    let descriptionEl = document.createElement("div");
    descriptionEl.setAttribute("class", "description");
    descriptionEl.innerText = description;
    itemDetailEl.append(descriptionEl);

    let dateEl = document.createElement("div");
    dateEl.innerText = date;
    itemDetailEl.append(dateEl);

    let breakEl = document.createElement("hr");

    todoItemEl.classList.add(`item-${id}`);

    todoItemEl.append(breakEl);


    return todoItemEl;

}

let createEditEl = () =>  {
    let formEl = document.createElement("form");
    formEl.classList.add("edit-form");
    formEl.id = "edit-form"
    todoItemsListEl.append(formEl);

    let editDetailEl = document.createElement("div");
    editDetailEl.classList.add("edit-detail");
    formEl.append(editDetailEl);

    let inputTitleEl = document.createElement("input");
    inputTitleEl.name = "title";
    inputTitleEl.type = "text";
    inputTitleEl.placeholder = "Title";
    editDetailEl.append(inputTitleEl);

    let inputDescEl = document.createElement("input");
    inputDescEl.name = "description";
    inputDescEl.type = "text";
    inputDescEl.placeholder = "Description";
    editDetailEl.append(inputDescEl);

    let date_n_priorityEl = document.createElement("div");
    date_n_priorityEl.classList.add("date-priority");
    editDetailEl.append(date_n_priorityEl);

    let inputDateEl = document.createElement("input");
    inputDateEl.type = "date";
    inputDateEl.name = "date";
    inputDateEl.value = "dd / mm / yyyy";
    inputDateEl.id = "date";
    date_n_priorityEl.append(inputDateEl);



    let selectEl = document.createElement("select");
    selectEl.name = "priority";
    selectEl.id = "priority";

    const priority = [
        {value: "", text: "Priority"},
        {value: "p1", text: "Priority 1"},
        {value: "p2", text: "Priority 2"},
        {value: "p3", text: "Priority 3"},
        {value: "p4", text: "Priority 4"}
    ];

    priority.forEach (el => {
        let optionEl = document.createElement("option");
        optionEl.value = el.value;
        optionEl.innerHTML = el.text;
        selectEl.append(optionEl);
    })



    date_n_priorityEl.append(selectEl);


    let save_cancelEl = document.createElement("div");
    save_cancelEl.classList.add("save-line");
    
    let saveEl = document.createElement("button");
    saveEl.classList.add("save");
    saveEl.type = "submit";
    saveEl.setAttribute("form", "edit-form");
    saveEl.innerText = "Save Task";
    save_cancelEl.append(saveEl);
    
    let cancelEl = document.createElement("button");
    cancelEl.classList.add('cancel');
    cancelEl.innerText = "Cancel";
    cancelEl.type = "button";
    save_cancelEl.append(cancelEl);
    
    formEl.append(save_cancelEl);

    return formEl;

}

function emptyTodoListEl() {
    todoItemsListEl.innerHTML = "";
}

function createProjectNamesEl(ps) {
    let array = [];
    let len = projects.length;
    if (len == 0) {
        console.log("No project found");
        return 0;
    }
    else if (len > 0) {
        projects.forEach(p => {
            let pNameEl = document.createElement("li");
            pNameEl.setAttribute("pId", `${p.id}`)
            pNameEl.innerHTML = p.title;
            array.push(pNameEl);
        })
    }

    return array;
}
let dropFilterEl = document.querySelector("#list-priority");

let mainHeadingEl = document.querySelector(".main-heading");
let saveEl = document.querySelector(".save");

export { defaultSidebarEl, projectSidebarEl, mainHeadingEl, createTodoDomEl, createEditEl, todoItemsListEl, emptyTodoListEl, createProjectNamesEl, dropFilterEl, saveEl };

