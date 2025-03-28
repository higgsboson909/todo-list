import { contentEl } from "./index";
import itemImg from "./asset/resource/item.jpg";

export let load_menu_page = () => {
    class CreateDomEl {
        constructor (type, className) {
            this.domEl = document.createElement(type, className);
            this.domEl.classList.add(className);
        }

        getDomEl () {
            return this.domEl;
        }
        
    };

    // dom-element 1
    const menuEl = new CreateDomEl("div", 'menu').getDomEl();
    contentEl.append(menuEl);

    // Menu dom-elements
        // items images
        // items text
    const menuItems = [];
    const menuItemTexts = [];
    const menuItemImgs = [];
    for(let i = 0; i < 10; i++) {
        let items = i + 1;
        menuItems[i] = new CreateDomEl("div", "items").getDomEl();
        menuItemImgs[i] = new CreateDomEl("img", "images").getDomEl();
        menuItemImgs[i].src = itemImg;
        menuItemTexts[i] = new CreateDomEl("p", "texts").getDomEl();
        menuItemTexts[i].innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nam?"

        menuItems[i].append(menuItemImgs[i]);
        menuItems[i].append(menuItemTexts[i]);
        
    }
    
    menuItems.forEach((item) => {
        menuEl.append(item);
    });

    

}