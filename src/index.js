import "./styles.css";
import { projects, createProject, deleteProject, editProjectName } from "./projects.js"

let p = projects;
// Arrays for todo items
let inbox = [];
let today = [];

// template for a todo item
const Todo_Item = class {

    static id = 1;

    constructor (title, description, date, priority, project="inbox") {

        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;
        this.id = Todo_Item.id++;
    }

    // store in array
    saveTodoItem () {
        
        if (this.project == "inbox" || this.project == "") {
            inbox.push(this);
        }
        if (p.length > 0) {
            p.forEach(element => {
                if(this.project == element.name) {
                    element.todo.push(this);
                }
            })
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



function editTodoItems (title, description, date, priority, id, project="inbox") {
    if ((project == "" || project == undefined || project == "inbox")) {
        for (let i = 0; i < inbox.length; i++) {
            if (inbox[i].id == id) 
                inbox[i].editItem (title, description, date, priority, project);
        }
    }
    else {
        p.forEach (element => {
            for (let i = 0; i < element.todo.length; i++) {
                if (element.todo[i].id == id && element.name == project) 
                    element.todo[i].editItem(title, description, date, priority, project);
            }
        });
    }

}

function deleteTodoItem (id, pName="inbox") {
    if ((pName == "" || pName == undefined || pName == "inbox")) {
        for (let i = 0; i < inbox.length; i++) {
            if (inbox[i].id == id) 
                inbox.splice(i, 1);
        }
    }
    else {
        p.forEach (element => {
            for (let i = 0; i < element.todo.length; i++) {
                if (element.todo[i].id == id && element.name == pName) 
                    element.todo.splice(i, 1);
            }
        });
    }


    if (pName == "inbox") {
    }
    else {
        p.forEach (element => {
            if (element.name == pName) {
            }
        });
    }

}



//  Logs
createTodoItem("Ai Project", "do it now", "12-2-2025", "1", "Ai");
createTodoItem("Python Project", "do it now", "12-2-2025", "1", "Python");
createTodoItem("General", "do it now", "12-2-2025", "1", "Python");
createTodoItem("Inbox", "do it now", "12-2-2025", "1");
createTodoItem("Hi", "lets start", "12-2-2025", "1");

editTodoItems ("algo-course", "do it before summer", "date", "1", 2, "Python");
editTodoItems ("Node js", "do it before summer too", "date", "2", 1, "Ai");
editTodoItems ("Machine learn", "Mustufa has done this", "date", "2", 1, "Ai");
editTodoItems ("Scikit learn", "As an ass", "date", "2", 2, "Python");

deleteTodoItem (5 );
deleteTodoItem (1, "Ai");


editProjectName ("Python", "C++");
editProjectName ("C++", "Python")
editProjectName ("Ai", "C++")

console.log("Projects -----------", p);
console.log("Inbox ---------------", inbox);



