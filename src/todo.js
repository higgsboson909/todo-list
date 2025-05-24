
import { format, compareAsc, min } from "date-fns";
let projects = [];

let inbox = [];
let today = [];
let upcoming = [];


// to create new todo item
const Todo_Item = class {

    static id = 0;
    
    create(title, description, date, priority, isDone, project="inbox") {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.isDone = isDone;
        this.project = project;
        this.id = Todo_Item.id++;

        return this;
    }

    edit(title, description, date, priority, isDone, project="inbox") {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.isDone = isDone;
        this.project = project;

        return this;
    }

}


const Project = class {

    static id = 0;

    create(title) {

        this.title = title;
        this.id = Project.id++;
        this.todos = [];

        return this; 
    }

    edit(title) {
        this.title = title;
        return this;
    }

}

// insert in respective place/array
function create_n_pushItem(title, description, date, priority, isDone, project) {
    let item = new Todo_Item();
    item = item.create(title, description, date, priority, isDone, project);
    if (item.project == "inbox") {
        inbox.push(item);
    }

    if(item.project != "inbox" && item.project != "") {

        let found = projects.find(p => (p.title == project));
        if (!found){
            let newProject = new Project();
            newProject = newProject.create(project);
            newProject.todos.push(item);
            projects.push(newProject);
        }
 
       if (found)  {
            projects.forEach(p => {
            if (p.title == project) {
                p.todos.push(item);
            }
        })
       }
       
    }

}

function editTodoItem(id, title, description, date, priority, isDone, project) {
    if (project == "inbox")  {
        let item = inbox.find(item => ( item.id == id ));
        console.log("hi i am done ", item instanceof Todo_Item)
        item.edit(title, description, date, priority, isDone, project);
    }

    else if (project != "inbox") {
        let p = projects.find(p => (p.title == project));
        let item = p.todos.find(todo => (todo.id == id));
        console.log("hi i am done ", item instanceof Todo_Item)
        console.log( "hi");
        item.edit(title, description, date, priority, isDone, project);
    }

}

function deleteProject(id) {
    projects.forEach((p, i) => {
        if (p.id == id) {
            projects.splice(i, 1);
        }
    });
}

// delete todo item from respective array
function deleteTodoItem(id, pName="inbox") {
    if ((pName == "" || pName == undefined || pName == "inbox")) {
        inbox.forEach((item, i) => {
            if (inbox[i].id == id) {
                inbox.splice(i, 1);
            }
        });
    }
    else {
        projects.forEach(p => {
            p.todos.forEach((item, i) => {
                if (item.id == id) {
                    p.todos.splice(i, 1);
                }
            });
        });
    }
}

function editProjectName(id, newName) {
    let p = new Project();
    p = projects.find(p => (p.id == id));

    p.edit(newName);
}

// get all the individual items
function allItems() {
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
    let date = format(new Date(), "yyyy-MM-dd");
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

function getUpcomingItems (items) {
    let array = [];
    items.forEach (item => {
        let date = item.date.split("-");
        if (compareAsc (new Date (+date[0], +date[1] - 1, +date[2]), new Date ()) == 1) {
            array.push(item);
        }
    });

    return array;
}

export { inbox, projects, today, upcoming, create_n_pushItem, editTodoItem, deleteProject, editProjectName, deleteTodoItem, allItems, todayItems, arrangeWrtDate, arrangeWrtPriority, getUpcomingItems}