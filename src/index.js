import "./styles.css";
import {  inbox, projects, today, upcoming, create_n_pushItem, editTodoItem, deleteProject, editProjectName, deleteTodoItem, getProjectItems, allItems, getTodayItems, arrangeWrtDate, arrangeWrtPriority, getUpcomingItems } from "./todo.js";
import { renderProjectNames, renderTodoItems } from "./render_elements.js";
import { createTodoDomEl, dropFilterEl, projectSidebarEl } from "./dom_elements.js";
import { defaultSidebarEl_evL, projectSidebarEl_evL, dropFilterEl_evL } from "./event_listeners.js";



defaultSidebarEl_evL();
projectSidebarEl_evL(projects);
dropFilterEl_evL();

//  Logs
create_n_pushItem("AI Optimization", "Tune hyperparameters", "2025-05-27", "2", false, "AI");
create_n_pushItem("AI Data Collection", "Gather training data", "2025-05-23", "2", false, "AI");
create_n_pushItem("AI Evaluation", "Evaluate results", "2025-05-26", "3", false, "AI");
create_n_pushItem("AI Report Writing", "Write report", "2025-05-28", "4", false, "AI");
create_n_pushItem("AI Model Training", "Train new model", "2025-05-25", "1", false, "AI");

create_n_pushItem("Code Refactoring", "Clean codebase", "2025-05-26", "3", false, "Python");
create_n_pushItem("Write Unit Tests", "Add tests", "2025-05-25", "2", false, "Python");
create_n_pushItem("Performance Tuning", "Speed improvements", "2025-05-27", "2", false, "Python");
create_n_pushItem("Documentation", "Update docs", "2025-05-29", "4", false, "Python");
create_n_pushItem("Python Bug Fixing", "Fix critical bugs", "2025-05-24", "1", false, "Python");

create_n_pushItem("Schedule Doctor", "Annual checkup", "2025-05-22", "3", false);
create_n_pushItem("Order Supplies", "Office materials", "2025-05-26", "1", false);
create_n_pushItem("Book Flights", "Vacation plans", "2025-05-27", "4", false);
create_n_pushItem("Renew License", "Driver's license renewal", "2025-05-25", "2", false);
create_n_pushItem("Pay Bills", "Electricity and internet", "2025-05-28", "3", false);


// editTodoItem(0, "Node js", "do it before summer too", "date", "2", false, "Ai");
// editTodoItem(1, "Machine learn", "Mustufa has done this", "date", "2", true, "Ai");
// editTodoItem(3, "Scikit learn", "As an ass", "date", "2", 2, "Python");


// id and name of project
// deleteTodoItem(0, "Ai");
// deleteTodoItem(3, "Python");
// deleteTodoItem(5, "Zig");

// id and new name
// editProjectName(0 , "Artificial Intelligence");
// editProjectName(1 , "Py");
// editProjectName(2 , "Zig Lang");


// deleteProject(0)
// deleteProject(1)
// deleteProject(2)


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
getUpcomingItems(inbox);
getTodayItems(inbox);

console.log(("here we go"), getProjectItems(0))

// console.log("todays are below", todayItems(inbox));
// console.log("wrt priority are below", arrangeWrtPriority(inbox));
// console.log("wrt data are below", arrangeWrtDate(inbox));
// defaultSidebarEl_evL(today, inbox, upcoming);

// renderTodoItems(inbox);
// let getProjects = () => {
//         return projects
// }
renderTodoItems(inbox);
export { inbox, today , upcoming, projects};