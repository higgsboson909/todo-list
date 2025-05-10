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


createTodoItem("Ai Project", "do it now", "12-2-2025", "1", "Ai");
createTodoItem("Python Project", "do it now", "12-2-2025", "1", "Python");
createTodoItem("General", "do it now", "12-2-2025", "1", "Python");
createTodoItem("Inbox", "do it now", "12-2-2025", "1", "");

function general2project (title, description, date, priority, project="inbox", index) {
    if ((index == undefined) && (project == "" || project == undefined || project == "inbox")) {
        inbox[0].editItem (title, description, date, priority, project)
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

general2project ("algo-course", "do it before summer", "date", "1", "");
general2project ("Node js", "do it before summer too", "date", "1");
general2project ("Machine learn", "Mustufa has done this", "date", "2", "Ai", 0);
general2project ("Scikit learn", "As an ass", "date", "2", "Python", 1);


console.log("Projects -----------", p);
console.log("Inbox ---------------", inbox);




