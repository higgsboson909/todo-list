import "./styles.css";
import { load_home_page } from "./home"
import { load_menu_page } from "./menu"
import { load_about_page } from "./about"

export let contentEl = document.querySelector("#content");
let btnEls = document   .querySelectorAll("button");

load_home_page();

btnEls.forEach((b) => {
    b.addEventListener('click', (event) => {
        contentEl.innerHTML = ''
        if(event.target.classList.contains("p1")) {
            load_home_page();
        }
        else if(event.target.classList.contains("p2")) {
            load_menu_page();
        }
        else if (event.target.classList.contains("p3")) {
            load_about_page();
            
        }

    })
});
