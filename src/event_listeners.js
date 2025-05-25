// import { inbox, today, upcomingItems } from "./index";
// import { renderMainHeading, renderTodayItems } from "./render_elements";
import { defaultSidebarEl, projectSidebarEl, todoItemsListEl } from "./dom_elements";


function defaultSidebarEl_evL () {
defaultSidebarEl.forEach(el => {
    el.addEventListener ('click', (e) => {
        if (e.target.className == "Inbox") {
            // renderTodos(e.target.className)
        }
        else if (e.target.className == "Today") {
            // renderTodos(e.target.className)
            // renderTodayItems(today)
            // console.log(`clicked ${e.target.className}`);
        }
        else if (e.target.className == "Upcoming") {
            // renderTodos(e.target.className)
            // console.log (upcomingItems(inbox));
            // checking 
            // projects.forEach((project) => {
            //         console.log(upcomingItems(project.todo));
            // });
        }
        console.log (`clicked ${e.target.className}`);
    });

});
}

function projectSidebarEl_evL() {
    projectSidebarEl.forEach(element => {
        element.addEventListener('click', (e) => {
            console.log (`clicked ${e.target.className}`);
            if (e.target.className) {

                // get specific project
                // projects.forEach((project) => {

                //     renderTodos(e.target.className)
                //     if (project.name == e.target.className) {
                //         console.log(project.todo);
                //     }
                // });
                // console.log (projects);
            }
        });
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