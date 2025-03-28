import { contentEl } from "./index";
import  locationImg  from "./asset/resource/location.jpg";

export let load_about_page = () => {
    

    class CreateDomElement {
        constructor (type, className) {
            this.domEl = document.createElement(type);
            this.domEl.classList.add(className);
        }

        getDomEl () {
            return this.domEl;
        }
    };


    // 1st El
    const aboutEl = new CreateDomElement('div', 'about').getDomEl();
    contentEl.append(aboutEl);

    
    const aboutTextEl = new CreateDomElement('div', 'about-text').getDomEl();
    // const textEl = new CreateDomElement('pre', 'text-element').getDomEl();
    let html = `<pre><h2>MCafe Eugen GmbH &amp Co. KG</h2>
    Domplatz XX
    481XX Münster
    E-Mail: myrestaurant@restaurant.de

    Geschäftsführung
    Eugen aus Essen

    Gerichtsstand: Amtsgericht Münster, Westfalen
    Steuernummer: 111/2222/3333 </pre>`

    aboutTextEl.innerHTML = html; 
    // aboutTextEl.append(textEl);
    const imgEl = new CreateDomElement('img', 'location-img').getDomEl();
    imgEl.src = locationImg;

    aboutEl.append(aboutTextEl);
    aboutEl.append(imgEl);



};