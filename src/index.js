import "./styles.css";
import { projects, createProject, deleteProject, editProjectName } from "./projects.js"
import { format, compareAsc, min } from "date-fns";

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

// get all the individual items
let allItems = () => {
    let items = [...inbox];
    p.forEach( element => {
        element.todo.forEach (item => {
            items.push(item);
        })
    })

    return items;

};

// return array of today items
function todayItems (items) {
    let date = format(new Date(), "dd-MM-yyyy");
    console.log(date);
    let todays = [];
    items.forEach(item => {
        if (item.date == date) {
            todays.push(item);
        }
    });

    return todays;
}

function arrangeWrtPriority (items) {
    let array = items.sort((item1, item2) => {
        return item1.priority - item2.priority;
    });

    return array;
}

function arrangeWrtDate(items) {
    let array = items.sort((item1, item2) => {
        let [year0, month0, day0] = item1.date.split("-");
        let [year1, month1, day1] = item2.date.split("-");
        return compareAsc (new Date (+year0, +month0 - 1, +day0),
                           new Date (+year1, +month1 - 1, +day1));
    });

    return array;
}

//  Logs
createTodoItem("Ai Project", "do it today", "2012-11-01", 1, "Ai");
createTodoItem("Python Project", "do it now", "2012-11-01", 2, "Python");
createTodoItem("General", "do it now", "2012-11-12", 3, "Python");
createTodoItem("Inbox", "do it now", "2012-11-12", 4);
createTodoItem("Hi", "lets start", "2012-10-20", 3);
createTodoItem("Hi", "lets start", "2012-11-30", 2);
createTodoItem("Hi", "lets start", "2012-11-12", 4);
createTodoItem("Hi", "lets start", "2012-11-2", 4);
createTodoItem("Hi", "lets start", "2012-1-1", 0);

// editTodoItems ("algo-course", "do it before summer", "date", "1", 2, "Python");
// editTodoItems ("Node js", "do it before summer too", "date", "2", 1, "Ai");
// editTodoItems ("Machine learn", "Mustufa has done this", "date", "2", 1, "Ai");
// editTodoItems ("Scikit learn", "As an ass", "date", "2", 2, "Python");

// deleteTodoItem (5 );
// deleteTodoItem (1, "Ai");


// editProjectName ("Python", "C++");
// editProjectName ("C++", "Python")
// editProjectName ("Ai", "C++")

console.log("Projects -----------");
p.forEach( el => {
    el.todo.forEach (i => {
        console.log(i);
    })
})
console.log("Inbox ---------------");
inbox.forEach( el => {
        console.log(el);
})
// console.log(allItems())
console.log(p);
console.log(todayItems(allItems()));
// console.log(format(new Date(), "dd-MM-yyyy"))

console.log(arrangeWrtPriority(inbox));
console.log(arrangeWrtDate(inbox));