import { mainHeadingEl, createTodoItemEl, todoItemsListEl } from "./dom_elements";
import { defaultSidebarEl, renderTodos } from "./dom_elements";

let renderMainHeading = (type) => { // className
    mainHeadingEl.innerHTML = type;
}

function renderTodayItems(today) {
    todoItemsListEl.classList.add("today");
    today.forEach(item => {
        todoItemsListEl.append(createTodoItemEl(item.title, item.description, item.date, item.priority, item.isDone));
    });
}


function defaultSidebarEl_evL (today, inbox, upcoming) {
    defaultSidebarEl.forEach(el => {
        el.addEventListener ('click', (e) => {
            if (e.target.className == "Inbox") {
                renderMainHeading(e.target.className);
                renderTodayItems(inbox);
                console.log(inbox);
            }
            else if (e.target.className == "Today") {
                renderMainHeading(e.target.className)
                renderTodayItems(today);
                console.log(today);
            }
            else if (e.target.className == "Upcoming") {
                renderMainHeading(e.target.className)
                renderTodayItems(upcoming);
            }
            console.log (`clicked ${e.target.className}`);
        });

    });
}


export { renderMainHeading, renderTodayItems, defaultSidebarEl_evL};