import { inbox, today, upcomingItems } from "./index";
import { projects } from "./projects";

let defaultSidebarEl = document.querySelectorAll(".default div");

defaultSidebarEl.forEach(el => {
    el.addEventListener ('click', (e) => {
        if (e.target.className == "inbox") {
            console.log(inbox);
        }
        else if (e.target.className == "today") {
            console.log(today);
        }
        else if (e.target.className == "upcoming") {
            console.log (upcomingItems(inbox));
            // checking 
            projects.forEach((project) => {
                    console.log(upcomingItems(project.todo));
            });
        }
        console.log (`clicked ${e.target.className}`);
    });

});

let projectsEl = document.querySelectorAll(".projects li");
projectsEl.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.className) {

            // get specific project
            projects.forEach((project) => {
                if (project.name == e.target.className) {
                    console.log(project.todo);
                }
            });
            console.log (projects);
        }
    });
});


export { defaultSidebarEl, projectsEl };