import "./styles.css";
import {  inbox, projects, today, upcoming, create_n_pushItem, editTodoItem, deleteProject, deleteTodoItem, allItems, todayItems, arrangeWrtDate, arrangeWrtPriority, getUpcomingItems } from "./todo.js";
// import { projects, createProject, deleteProject, editProjectName } from "./projects.js"
// import { defaultSidebarEl, projectsEl, mainHeadingEl, createTodoItemEl, todoItemsListEl} from "./dom_elements.js"; 
import { defaultSidebarEl_evL } from "./render_elements.js";
// defaultSidebarEl_evL();
import { renderMainHeading, renderTodayItems } from "./render_elements.js"



//  Logs
create_n_pushItem("Ai Project", "do it today", "2032-11-01", "2", true, "Ai");
create_n_pushItem("Hi Project", "do it today", "2032-11-01", "2", true, "Ai");
create_n_pushItem("Inbox Project", "do it today", "2032-11-01", "2", true, "inbox");
create_n_pushItem("Python Project", "do it now", "2052-11-01", "3", true, "Python");
create_n_pushItem("General", "do it now", "2012-11-12", "3", true, "Python");
create_n_pushItem("Zig", "do it now", "2012-11-12", "3", true, "zig");
create_n_pushItem("Inbox", "do it now", "2012-11-12", "4", false);
create_n_pushItem("Hi", "lets start", "2025-06-12", "1", false);
create_n_pushItem("Hi", "lets start", "2025-05-19", "3", true);
create_n_pushItem("Hi", "lets start", "2025-6-20", "2", false);
create_n_pushItem("Hi", "lets start", "2025-11-22", "5", true);
create_n_pushItem("Hi", "lets start", "2025-05-19", "5", false);

// editTodoItems ("algo-course", "do it before summer", "2028-03-02", "1", 2, false, "Python");
editTodoItem(0, "Node js", "do it before summer too", "date", "2", false, "Ai");
editTodoItem(1, "Machine learn", "Mustufa has done this", "date", "2", true, "Ai");
editTodoItem(3, "Scikit learn", "As an ass", "date", "2", 2, "Python");

// deleteTodoItem (5 );
// deleteTodoItem (1, "Ai");


// editProjectName ("Python", "C++");
// editProjectName ("C++", "Python")
// editProjectName ("Ai", "C++")

// defaultSidebarEl_evL();
// console.log("Projects -----------");
// // console.log(projects);
console.log("Inbox ---------------");
console.log(inbox);

console.log("all project todos")
projects.forEach( el => {
        
        console.log(el.title, el.todos);
})
// console.log(allItems())
// let upcoming = upcomingItems(inbox);
// today = todayItems(inbox);

// console.log(upcoming)
// defaultSidebarEl_evL(today, inbox, upcoming);

export { inbox, today , upcoming};