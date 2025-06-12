import { inbox, today, upcoming, projects } from "./index";
import { renderMainHeading, renderTodoItems, renderOnEditForm } from "./render_elements";
import { defaultSidebarEl, projectSidebarEl, todoItemsListEl, emptyTodoListEl, dropFilterEl, createEditEl, saveEl, mainHeadingEl } from "./dom_elements";
import { arrangeWrtDate, arrangeWrtPriority, getProjectItems, allItems, getTodayItems, getUpcomingItems, editTodoItem } from "./todo";
import { ar } from "date-fns/locale";

function defaultSidebarEl_evL () {
defaultSidebarEl.forEach(el => {
    el.addEventListener ('click', (e) => {
        dropFilterEl.selectedIndex = 0;
        emptyTodoListEl();
        
        renderMainHeading(e.target.className);
        if (e.target.className == "Inbox") {
            renderTodoItems(inbox);
            mainHeadingEl.classList.remove("Inbox", "Upcoming", "Today");
            mainHeadingEl.classList.add("Inbox");
        }
        else if (e.target.className == "Today") {
            let array = getTodayItems(allItems());
            renderTodoItems(array);
            mainHeadingEl.classList.remove("Inbox", "Upcoming", "Today");
            mainHeadingEl.classList.add("Today");
        }
        else if (e.target.className == "Upcoming") {
            let array = getUpcomingItems(allItems());
            renderTodoItems(array);
            mainHeadingEl.classList.remove("Inbox", "Upcoming", "Today");
            mainHeadingEl.classList.add("Upcoming");
        }

        // add current class name on ul element

        todoItemsListEl.classList.remove(...todoItemsListEl.classList);
        todoItemsListEl.classList.add(`items-list`);
        todoItemsListEl.classList.add(`${e.target.className}`);
    });

});
}

function projectSidebarEl_evL(projects) {
    projectSidebarEl.addEventListener('click', (e) => {
        dropFilterEl.selectedIndex = 0;
        let p = (projects[e.target.getAttribute('pid')])
        if (p != null || p != undefined )  {

            emptyTodoListEl();
            renderMainHeading(`Project (${p.title})`);
            mainHeadingEl.classList.remove(...mainHeadingEl.classList);
            mainHeadingEl.classList.add("main-heading", p.title);
            renderTodoItems(p.todos);
            todoItemsListEl.classList.remove(...todoItemsListEl.classList);
            todoItemsListEl.classList.add(`items-list`);
            todoItemsListEl.classList.add(`${e.target.getAttribute('pid')}`);
 
 
        }

   });
}

function dropFilterEl_evL() {
    dropFilterEl.addEventListener('click', (e) => {
        let ulClass = todoItemsListEl.classList[1];
            if (e.target.value == 'l2' && (ulClass == "Upcoming" || ulClass == "Today" || ulClass == "Inbox")) {
                let id = ulClass.length - 1;

                if(ulClass[id] == 'y') {
                    let array = getTodayItems(allItems());
                    array = arrangeWrtDate(array);
                    renderTodoItems(array);
                }
                else if (ulClass[id] == 'x') {
                    let array = arrangeWrtDate(inbox);
                    renderTodoItems(array);
                }
                else if (ulClass[id] == 'g') {
                    let array = arrangeWrtDate(upcoming);
                    renderTodoItems(array);
                }
            }
            else if (e.target.value == 'l1' && (ulClass == "Upcoming" || ulClass == "Today" || ulClass == "Inbox")) {
                let id = ulClass.length - 1;

                if(ulClass[id] == 'y') {
                    let array = getTodayItems(allItems());
                    renderTodoItems(array);
                }
                else if (ulClass[id] == 'x') {
                    renderTodoItems(inbox);
                }
                else if (ulClass[id] == 'g') {
                    renderTodoItems(upcoming);
                }
            }
            else if (e.target.value == 'l3' && (ulClass == "Upcoming" || ulClass == "Today" || ulClass == "Inbox")) {
                let id = ulClass.length - 1;

                if(ulClass[id] == 'y') {
                    let array = getTodayItems(allItems());
                    array = arrangeWrtPriority(array);
                    renderTodoItems(array);
                }
                else if (ulClass[id] == 'x') {
                    let array = arrangeWrtPriority(inbox);
                    renderTodoItems(array);
                }
                else if (ulClass[id] == 'g') {
                    let array = arrangeWrtPriority(upcoming);
                    renderTodoItems(array);
                }
            }
            else if (e.target.value == 'l2' && !(isNaN(+ulClass))) {
                console.log(+ulClass);
                let pArray = getProjectItems(+ulClass);

                    let array = arrangeWrtDate(pArray);
                    renderTodoItems(array);
            }
            else if (e.target.value == 'l1' && !(isNaN(+ulClass))) {
                console.log(+ulClass);
                let pArray = getProjectItems(+ulClass);
                    renderTodoItems(pArray);
            }
            else if (e.target.value == 'l3' && !(isNaN(+ulClass))) {
                console.log(+ulClass);
                let pArray = getProjectItems(+ulClass);
                    let array = arrangeWrtPriority(pArray);
                    renderTodoItems(array);
            }
            


    })
}

function getItemClick () {
    todoItemsListEl.forEach(item => {
        item.addEventListener("click", (e) => {
        })
    });
}
let editEl = null;


    
todoItemsListEl.addEventListener('click', (e) => {


    let target = e.target; 
    console.log("hi", target);
    if (target.className == "edit") {
        let edit = document.querySelector(".edit-form");
        
        
        if (edit != null) {
            edit.remove();
            let allItemsEl = [];

            allItemsEl.push(...todoItemsListEl.querySelectorAll("li"));
            let item = allItemsEl.find(e => (e.classList.contains("none")));
            item.classList.remove("none")

            // todoItem.classList.remove("none");
            
        }
        let todoItem = target.parentElement.parentElement.parentElement.parentElement.parentElement;
        editEl = createEditEl()
        todoItem.before(editEl)
        
        renderOnEditForm(todoItem, editEl);

        let item_no = todoItem.classList[1];
        item_no = item_no.slice(5);

        saveItemDetails(editEl, item_no);
        
        todoItem.classList.add("none")
        cancel_evL(todoItem, editEl);

        // todoItem.append.
        console.log(item_no);
         
        console.log(editEl);

        }


})


function saveItemDetails(el, id) {
    // add event listener on the save button
    el.addEventListener('submit', (e) => {
        console.log(e.target);
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(id);
        console.log(formData);
        console.log(formData.get("title"));

        // if(formData.priorit == 0)
        editTodoItem(+id, formData.get("title"), formData.get("description"), formData.get("date"), formData.get("priority").slice(1), false, "inbox");

    })
}


function cancel_evL (item, edit) {
    let cancelEl = document.querySelector(".cancel");
    cancelEl.addEventListener('click', (e) => {
        e.preventDefault()

        item.classList.remove("none");
        edit.remove()
        console.log("hi");
    })

}

export { defaultSidebarEl_evL, projectSidebarEl_evL, getItemClick, dropFilterEl_evL}