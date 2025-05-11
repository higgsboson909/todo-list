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

    editItem (title, description, date, priority, project="inbox") {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }

    // editItem (index, ti)

}


// create and save the item in data-structure
const createTodoItem = (title, description, date, priority, project) => {
    let todoItem = new Todo_Item (title, description, date, priority, project);
    todoItem.saveTodoItem();

}



function editTodoItems (title, description, date, priority, index, project="inbox") {
    if ((project == "" || project == undefined || project == "inbox")) {
        inbox[index].editItem (title, description, date, priority, project)
    }
    else {
        for (let i = 0; i < p.length; i++) {
            let name = `p${i}`;
            if (p[i][name] == project && index < p[i].todo.length) {
                console.log(p[i][name])
                p[i].todo[index].editItem(title, description, date, priority, project);
            }
        }
    }

}

function deleteTodoItem (index, pName="inbox") {
    if (pName == "inbox") {
        inbox.splice(index, 1);
    }
    else {
        for(let i = 0; i < p.length; i++) {
            if (p[i][`p${i}`] == pName) {
                p[i].todo.splice(index, 1);
            }
        }
    }

}

//  Logs
createTodoItem("Ai Project", "do it now", "12-2-2025", "1", "Ai");
createTodoItem("Python Project", "do it now", "12-2-2025", "1", "Python");
createTodoItem("General", "do it now", "12-2-2025", "1", "Python");
createTodoItem("Inbox", "do it now", "12-2-2025", "1");
createTodoItem("Hi", "lets start", "12-2-2025", "1");

editTodoItems ("algo-course", "do it before summer", "date", "1", 0);
editTodoItems ("Node js", "do it before summer too", "date", "1", 0);
editTodoItems ("Machine learn", "Mustufa has done this", "date", "2", 0, "Ai");
editTodoItems ("Scikit learn", "As an ass", "date", "2", 1, "Python");

deleteTodoItem (0);
deleteTodoItem (0, "Python");

console.log("Projects -----------", p);
console.log("Inbox ---------------", inbox);




