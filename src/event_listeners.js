import { inbox, today, upcoming } from "./index";
import { renderMainHeading, renderTodoItems } from "./render_elements";
import { defaultSidebarEl, projectSidebarEl, todoItemsListEl, emptyTodoListEl } from "./dom_elements";


function defaultSidebarEl_evL () {
defaultSidebarEl.forEach(el => {
    el.addEventListener ('click', (e) => {
            emptyTodoListEl();
        if (e.target.className == "Inbox") {
            renderTodoItems(inbox);
        }
        else if (e.target.className == "Today") {
            renderTodoItems(today);
        }
        else if (e.target.className == "Upcoming") {
            renderTodoItems(upcoming);
        }
    });

});
}

function projectSidebarEl_evL(projects) {
        projectSidebarEl.addEventListener('click', (e) => {
            emptyTodoListEl();
            console.log (`clicked ${e.target.getAttribute('pid')}`);
            let p = (projects[e.target.getAttribute('pid')])
            if (p != null) 
                renderTodoItems(p.todos);
        });
}



function getItemClick () {
    console.log("hi")
    todoItemsListEl.forEach(item => {
        item.addEventListener("click", (e) => {
            console.log(e.target.className);
        })
    });
}


// console.log(today)

export { defaultSidebarEl_evL, projectSidebarEl_evL, getItemClick }