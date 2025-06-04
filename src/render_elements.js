import { mainHeadingEl, createTodoDomEl, todoItemsListEl } from "./dom_elements";
import { defaultSidebarEl, projectSidebarEl, createProjectNamesEl, emptyTodoListEl} from "./dom_elements";
import { inbox, projects } from "./todo"

let renderMainHeading = (type) => { // className
    mainHeadingEl.innerHTML = type;
}

function renderTodoItems(items) {
    emptyTodoListEl();
    items.forEach(item => {
        todoItemsListEl.append(createTodoDomEl(item.title, item.description, item.date, item.id, item.priority, item.isDone));
    });
}

function renderProjectNames(projects) {
    projectSidebarEl.innerHTML = "";
    let array = createProjectNamesEl(projects);
    array.forEach(a => {
        projectSidebarEl.append(a);
    })
    
}

function renderOnEditForm(item) {

    // get the detail for edit Form
    let itemIdText = item.classList[1];
    let itemId = itemIdText.slice(5);
    let mainHeadEl = document.querySelector(".main-heading");
    let mainHeading = mainHeadEl.classList[1];
    let todo = null;

    console.log(mainHeading);
    if (mainHeading == "Inbox") {
        console.log(itemId);
        todo = inbox.find((t) => { return t.id == itemId});
    }
    else {
        let project = projects.find(p => (p.title == mainHeading));
        todo = project.todos.find(t => (t.id == itemId));
    }

    let title = todo.title;
    let  description = todo.description;
    let  date = todo.date;
    let priority = todo.priority;
    let p= todo.project;


    console.log({title, description, date, priority, p})
}

function renderCheckboxColor(checkMarkEl, priority) {
    if (priority == "1") {
        checkMarkEl.classList.add("red");
    }
    else if (priority == null) {
        checkMarkEl.classList.add("white");
    } else if (priority == '2') {
        checkMarkEl.classList.add("green");
    } else if (priority == '3') {
        checkMarkEl.classList.add("blue");
    } else if (priority == '4') {
        checkMarkEl.classList.add("yellow");
    }
}
export { renderMainHeading, renderTodoItems, renderProjectNames, renderOnEditForm, renderCheckboxColor};