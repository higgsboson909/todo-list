import { projects } from "./projects";

let defaultSidebarEl = document.querySelectorAll(".default div");

let projectsEl = document.querySelectorAll(".projects li");

let createTodoItemEl = (title, description, date, priority, isDone, project="inbox") => {
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
    editDeleteEl.innerText = "edit & delete";
    titleLineEl.append(editDeleteEl);

    let descriptionEl = document.createElement("div");
    descriptionEl.setAttribute("class", "description");
    descriptionEl.innerText = description;
    itemDetailEl.append(descriptionEl);

    let dateEl = document.createElement("div");
    dateEl.innerText = date;
    itemDetailEl.append(dateEl);

    let breakEl = document.createElement("hr");

    todoItemEl.append(breakEl);
    console.log(todoItemEl);


    return todoItemEl;

}


let todoItemsListEl = document.querySelector(".items-list");


// todoItemsListEl.append(createTodoItemEl());
// todoItemsListEl.append(createTodoItemEl());

let mainHeadingEl = document.querySelector(".main-heading");

export { defaultSidebarEl, projectsEl, mainHeadingEl, createTodoItemEl, todoItemsListEl};

