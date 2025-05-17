import { mainHeadingEl } from "./dom_elements"


let renderTodos = (type) => { // className
    mainHeadingEl.innerHTML = type;
}

export { renderTodos }