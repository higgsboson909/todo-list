import "./styles.css";
import  { projects, createProject } from "./projects.js";
let p = projects;
// Arrays for todo items
let inbox = [];
let today = [];

// template for a todo item
const Todo_Item = class {
    constructor (title, description, date, priority, project="inbox") {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;

    }

    // store in array
    saveTodoItem () {
        
        if (this.project == "inbox" || this.project == "") {
            inbox.push(this);
        }
        if (p.length > 0) {
            for (let i = 0; i < p.length; i++) {
                if(this.project == p[i][`p${i}`]) {
                    console.log(`p${i}`);
                    projects[i].todo.push(this);
                }
            }
        }
        else if (this.project == undefined) {
            console.error("project is undefined");
            
        }
    }

}




// create and save the item in data-structure
const createTodoItem = (title, description, data, priority, project) => {
    let todoItem = new Todo_Item (title, description, data, priority, project);
    todoItem.saveTodoItem();

}


createTodoItem("Ai Project", "do it now", "12-2-2025", "1", "Ai");
createTodoItem("Python Project", "do it now", "12-2-2025", "1", "Python");
createTodoItem("General", "do it now", "12-2-2025", "1", "Python");
createTodoItem("Inbox", "do it now", "12-2-2025", "1", "");

console.log("Projects -----------", p);
console.log("Inbox ---------------", inbox);




