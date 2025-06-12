import { mainHeadingEl, createTodoDomEl, todoItemsListEl } from "./dom_elements";
import { defaultSidebarEl, projectSidebarEl, createProjectNamesEl, emptyTodoListEl} from "./dom_elements";
import { getItemDetails, inbox, projects, getProjectId } from "./todo"

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

function renderOnEditForm(item, editEl) {

    let todo = getItemDetails(item);
     
    editEl.querySelector(".title").value = todo.title;
    editEl.querySelector(".description").value = todo.description;
    console.log(todo.date);
    editEl.querySelector("#date").value = todo.date;
    editEl.querySelector("#priority").value = `p${todo.priority}`;


    editEl.querySelector("#project").value = `p${+getProjectId(todo.project) + 1}`;

    console.log(todo);
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
export { renderMainHeading, renderTodoItems, renderProjectNames, renderOnEditForm, renderCheckboxColor };