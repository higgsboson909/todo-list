import { mainHeadingEl, createTodoDomEl, todoItemsListEl } from "./dom_elements";
import { defaultSidebarEl, projectSidebarEl, createProjectNamesEl, emptyTodoListEl} from "./dom_elements";

// console.log("i am projects", ps)
// console.log("i am projects", ps.length)

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
    // projectSidebarEl.innerHTML = `<h2 class="project">Projects</h2>`;
    let array = createProjectNamesEl(projects);
    array.forEach(a => {
        projectSidebarEl.append(a);
    })
    
}

export { renderMainHeading, renderTodoItems, renderProjectNames};