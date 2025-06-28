
import { format, compareAsc, min } from "date-fns";
import { renderProjectNames } from "./render_elements";
let projects = [];

let inbox = [];
let today = [];
let upcoming = [];

const projectNames = [];

projectNames.push("inbox");

// to create new todo item
const Todo_Item = class {

    static id = 0;
    
    create(title, description, date, priority="0", isDone, project="inbox") {
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
            renderProjectNames(projects);
        }
 
       if (found)  {
            projects.forEach(p => {
            if (p.title == project) {
                p.todos.push(item);
            };
        })
;       }
       
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
        console.log(p)
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


function getProjectItems(id) {
    let p = projects.find(p => (p.id== id));
    return p.todos;
}

// get all the individual items
function allItems() {
    let items = [...inbox];
    projects.forEach (p => {
        p.todos.forEach (item => {
            items.push(item);
        })
    })

    return items;
};

// return array of today items
function getTodayItems (i) {
    let items = [...i];
    let t = [];
    let date = format(new Date(), "yyyy-MM-dd");
    console.log(date);
    if (items.length == 0) {
        return 'not found';
    }

    items.forEach(item => {
        if (item.date == date) {
            t.push(item);
        }

    });
    today = t;
    return t;

}

function arrangeWrtPriority (items) {
    let array = [...items];
    array = array.sort((item1, item2) => {
        return item1.priority - item2.priority;
    });

    return array;
}

function arrangeWrtDate(items) {
    let array = [...items];
    array = array.sort((item1, item2) => {
        let [year0, month0, day0] = item1.date.split("-");
        let [year1, month1, day1] = item2.date.split("-");
        return compareAsc (new Date (+year0, +month0 - 1, +day0),
                           new Date (+year1, +month1 - 1, +day1));
    });

    return array;
}

function getUpcomingItems(i) {
    let items = [...i];
    let u = [];
    console.log("items", upcoming);
    items.forEach (item => {
        let date = item.date.split("-");
        if (compareAsc (new Date (+date[0], +date[1] - 1, +date[2]), new Date ()) == 1) {
            console.log("items", item);
            upcoming = u;
            u.push(item);
        }
    });

    return u;
}

function getAllProjectNames(items) {
    
    const array = ['inbox'];

    if(items.length != 0) {
        items.forEach((item) => {
            array.push(item.title);
        })
    }
    return array;
}

function getItemDetails(item) {

    // get the detail for edit Form
    let itemIdText = item.classList[1];
    let itemId = itemIdText.slice(5);
    let mainHeadEl = document.querySelector(".main-heading");
    let mainHeading = mainHeadEl.classList[1];
    let todo = null;

    console.log(itemId);
    console.log("main heading", mainHeading);


    if (mainHeading == "Inbox") {
        todo = inbox.find((t) => (t.id == itemId));
    }
    else if (mainHeading == "Today") {
         
        console.log(today);
        todo = today.find(t => (t.id == itemId));
    }
    else if (mainHeading == "Upcoming") {
         
        todo = upcoming.find(t => (t.id == itemId));
        console.log("upcoming", upcoming)
    }

    else {
        let project = projects.find(p => (p.title == mainHeading));
        todo = project.todos.find(t => (t.id == itemId));
    }

    let title = todo.title;
    let description = todo.description;
    let date = todo.date;
    let priority = todo.priority;
    let project = todo.project;
    
    return {title, description, date, priority, project};

}

    function getProjectId(name) {
        if (name != "inbox") {
            console.log(name);
            let project = projects.find(p => (p.title == name));
            return project.id;
        }
        else
            return "-1";
    }

export { inbox, projects, today, upcoming, create_n_pushItem, editTodoItem, deleteProject, editProjectName, deleteTodoItem, getProjectItems, allItems, getTodayItems, arrangeWrtDate, arrangeWrtPriority, getUpcomingItems, getAllProjectNames, getItemDetails, getProjectId}