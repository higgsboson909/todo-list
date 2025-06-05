import "./styles.css";
import {  inbox, projects, today, upcoming, create_n_pushItem, editTodoItem, deleteProject, editProjectName, deleteTodoItem, getProjectItems, allItems, getTodayItems, arrangeWrtDate, arrangeWrtPriority, getUpcomingItems } from "./todo.js";
import { renderProjectNames, renderTodoItems } from "./render_elements.js";
import { createTodoDomEl, dropFilterEl, projectSidebarEl } from "./dom_elements.js";
import { defaultSidebarEl_evL, projectSidebarEl_evL, dropFilterEl_evL } from "./event_listeners.js";



defaultSidebarEl_evL();
projectSidebarEl_evL(projects);
dropFilterEl_evL();

//  Logs
// === TODAY (June 5, 2025) ===
create_n_pushItem("Deploy AI Model", "Deploy version 2.3 to production", "2025-06-05", "1", false, "AI");
create_n_pushItem("Code Review", "Review John's pull request", "2025-06-05", "2", false, "DevOps");
create_n_pushItem("Team Meeting", "Discuss Q2 roadmap", "2025-06-05", "3", false, "Management");
create_n_pushItem("Grocery Shopping", "Buy weekly groceries", "2025-06-05", "2", false, "Personal");
create_n_pushItem("Pay Rent", "Transfer rent payment to landlord", "2025-06-05", "1", false, "Finance");

// === UPCOMING (next 7 days) ===
create_n_pushItem("Optimize SQL Queries", "Improve performance of reports", "2025-06-06", "2", false, "Database");
create_n_pushItem("Finish Presentation", "Finalize slides for client pitch", "2025-06-07", "1", false, "Work");
create_n_pushItem("Yoga Session", "Attend 1-hour yoga class", "2025-06-08", "4", false, "Health");
create_n_pushItem("Refactor API Layer", "Clean up outdated endpoints", "2025-06-09", "2", false, "Backend");
create_n_pushItem("Send Newsletter", "Monthly update to subscribers", "2025-06-10", "3", false, "Marketing");
create_n_pushItem("Backup Database", "Weekly data backup", "2025-06-11", "3", false, "IT");

// === LATER THIS MONTH ===
create_n_pushItem("Annual Report Draft", "Start drafting annual report", "2025-06-15", "3", false, "Work");
create_n_pushItem("Dentist Appointment", "Routine dental check-up", "2025-06-20", "2", false, "Health");
create_n_pushItem("Client Feedback Review", "Read and respond to client comments", "2025-06-18", "2", false, "Client");
create_n_pushItem("Plan Weekend Trip", "Find Airbnb and route", "2025-06-22", "4", false, "Personal");

// === NEXT MONTH AND BEYOND ===
create_n_pushItem("Budget Forecast", "Prepare Q3 budget forecast", "2025-07-01", "2", false, "Finance");
create_n_pushItem("Submit Tax Documents", "Upload forms before deadline", "2025-07-10", "1", false, "Legal");
create_n_pushItem("Data Cleanup", "Archive old logs and clean tables", "2025-07-15", "3", false, "IT");
create_n_pushItem("Onboarding New Interns", "Walkthrough systems and policies", "2025-07-20", "2", false, "HR");
create_n_pushItem("Security Audit", "Review system vulnerabilities", "2025-08-01", "1", false, "Security");

// === NEXT YEAR ===
create_n_pushItem("Migrate to New Platform", "Complete platform migration", "2026-01-15", "1", false, "Infra");
create_n_pushItem("Update Privacy Policy", "Legal compliance updates", "2026-03-05", "2", false, "Legal");
create_n_pushItem("Redesign Website", "Refresh UI and UX", "2026-04-10", "3", false, "Design");
create_n_pushItem("AI Research Summit", "Prepare talk for global summit", "2026-05-25", "1", false, "AI");
create_n_pushItem("AI Optimization", "Tune hyperparameters", "2026-05-27", "2", false, "ML");
create_n_pushItem("AI Data Collection", "Gather training data", "2025-05-23", "2", false, "AI");
create_n_pushItem("AI Evaluation", "Evaluate results", "2025-05-26", "3", false, "AI");
create_n_pushItem("AI Report Writing", "Write report", "2025-05-28", "4", false, "Zig");
create_n_pushItem("AI Model Training", "Train new model", "2025-06-05", "1", false, "AI");

create_n_pushItem("Code Refactoring", "Clean codebase", "2025-06-05", "3", false, "Python");
create_n_pushItem("Write Unit Tests", "Add tests", "2025-05-25", "2", false, "Python");
create_n_pushItem("Performance Tuning", "Speed improvements", "2026-05-27", "2", false, "Python");
create_n_pushItem("Documentation", "Update docs", "2025-05-29", "4", false, "Python");
create_n_pushItem("Python Bug Fixing", "Fix critical bugs", "2025-08-24", "1", false, "Python");

create_n_pushItem("Schedule Doctor", "Annual checkup", "2025-05-05", "3", false, "RL");
create_n_pushItem("Order Supplies", "Office materials", "2025-05-26", "1", false);
create_n_pushItem("Book Flights", "Vacation plans", "2025-05-27", "4", false);
create_n_pushItem("Renew License", "Driver's license renewal", "2025-05-25", "2", false);
create_n_pushItem("Pay Bills", "Electricity and internet", "2025-07-28", "3", false);
// create_n_pushItem("Pay Bills", "Electricity and internet", "2025-05-28", null, false, "Zig");


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

renderTodoItems(inbox);
export { inbox, today , upcoming, projects};