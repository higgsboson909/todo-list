import "./styles.css";
import { projects, createProject, deleteProject, editProjectName } from "./projects.js"
import { format, compareAsc, min } from "date-fns";
import { defaultSidebarEl } from "./event_listeners.js";

let p = projects;
// Arrays for todo items
let inbox = [];
let today = [];

// template for a todo item
const Todo_Item = class {

    static id = 1;

    constructor (title, description, date, priority, isDone, project="inbox") {

        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.project = project;
        this.isDone = isDone;
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

    editItem (title, description, date, priority, isDone, project="inbox") {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.isDone = isDone;
        this.project = project;
    }

    // editItem (index, ti)

}


// create and save the item in data-structure
const createTodoItem = (title, description, date, priority, id, isDone, project) => {
    let todoItem = new Todo_Item (title, description, date, priority, isDone, project);
    todoItem.saveTodoItem();

}



function editTodoItems (title, description, date, priority, id, isDone, project="inbox") {
    if ((project == "" || project == undefined || project == "inbox")) {
        for (let i = 0; i < inbox.length; i++) {
            if (inbox[i].id == id) 
                inbox[i].editItem (title, description, date, priority, id, isDone, project);
        }
    }
    else {
        p.forEach (element => {
            for (let i = 0; i < element.todo.length; i++) {
                if (element.todo[i].id == id && element.name == project) 
                    element.todo[i].editItem(title, description, date, priority, isDone, project);
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

function upcomingItems (items) {
    let array = [];
    items.forEach (item => {
        let date = item.date.split("-");
        if (compareAsc (new Date (+date[0], +date[1] - 1, +date[2]), new Date ()) == 1) {
            array.push(item);
        }
    });

    return array;
}

//  Logs
createTodoItem("Ai Project", "do it today", "2032-11-01", "2", 1, true, "Ai");
createTodoItem("Python Project", "do it now", "2052-11-01", "3", 2, true, "Python");
createTodoItem("General", "do it now", "2012-11-12", "3", 3, true, "Python");
createTodoItem("Inbox", "do it now", "2012-11-12", "4", 4, false);
createTodoItem("Hi", "lets start", "2025-06-12", "1", 3, false);
createTodoItem("Hi", "lets start", "2040-11-30", "3", 2, true);
createTodoItem("Hi", "lets start", "2025-6-20", "2", 4, false);
createTodoItem("Hi", "lets start", "2025-11-22", "5", 4, true);
createTodoItem("Hi", "lets start", "2025-05-1", "5", 0, false);

editTodoItems ("algo-course", "do it before summer", "2028-03-02", "1", 2, false, "Python");
editTodoItems("Yo", "lets start", "2025-06-12", "1", 3, false);
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
// console.log(todayItems(allItems()));
// console.log(format(new Date(), "dd-MM-yyyy"))

// console.log(arrangeWrtPriority(inbox));

// console.log(arrangeWrtDate(inbox));
console.log(upcomingItems (inbox));


export { inbox, today ,upcomingItems};