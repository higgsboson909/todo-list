import { projects } from "./index";

// let p= [...projects];
// console.log("projecst " , projects.length)
// console.log("projecst " , projects)

let defaultSidebarEl = document.querySelectorAll(".default div");

let projectSidebarEl = document.querySelector(".projects li");

let createTodoDomEl = (title, description, date, id, priority, isDone, project="inbox") => {
    let todoItemEl = document.createElement("li");
    todoItemEl.setAttribute("class", "todo-item");

    // todoItemEl.append(breakEl);
    
    let itemEl = document.createElement("div");
    itemEl.setAttribute("class", "item");

    todoItemEl.append(itemEl);

    let inputEl = document.createElement("input");
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

let todoItemsListEl = document.querySelector(".items-list");

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

let mainHeadingEl = document.querySelector(".main-heading");

export { defaultSidebarEl, projectSidebarEl, mainHeadingEl, createTodoDomEl, todoItemsListEl, emptyTodoListEl, createProjectNamesEl };

