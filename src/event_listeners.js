import { inbox, today, upcomingItems } from "./index";
import { projects } from "./projects";
import { renderMainHeading, renderTodayItems } from "./render_elements";
import { defaultSidebarEl, projectsEl } from "./dom_elements";


function defaultSidebarEl_evL () {
    defaultSidebarEl.forEach(el => {
        el.addEventListener ('click', (e) => {
            if (e.target.className == "Inbox") {
                renderTodos(e.target.className)
                console.log(inbox);
            }
            else if (e.target.className == "Today") {
                renderTodos(e.target.className)
                renderTodayItems(today)
                console.log(today);
            }
            else if (e.target.className == "Upcoming") {
                renderTodos(e.target.className)
                console.log (upcomingItems(inbox));
                // checking 
                projects.forEach((project) => {
                        console.log(upcomingItems(project.todo));
                });
            }
            console.log (`clicked ${e.target.className}`);
        });

    });
}

projectsEl.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.className) {

            // get specific project
            projects.forEach((project) => {

                renderTodos(e.target.className)
                if (project.name == e.target.className) {
                    console.log(project.todo);
                }
            });
            console.log (projects);
        }
    });
});


console.log(today)

export { defaultSidebarEl_evL }