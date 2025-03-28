import cafe from "./asset/resource/cafe.jpeg";
import designer8 from "./asset/resource/Designer8.jpeg";
import designer10 from "./asset/resource/Designer10.jpeg";
import { contentEl } from "./index"
let load_home_page = (() => {



    
    class DomElement {

        constructor(elType, className) {
            this.elType = elType;
            this.dElement = null; 
            this.className = className;

        }

        create() {
            this.dElement = document.createElement(this.elType);
            this.dElement.classList.add(this.className);
            return this.dElement;
        }

        setText(txt) {
            this.dElement.textContent = txt;
        }

    };

    let part1Text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod esse aspernatur, nesciunt quo soluta omnis reprehenderit mollitia aperiam libero quas animi voluptatibus repellendus. Amet laboriosam minima fuga sunt corporis deserunt?";
    let part2Text = "Here, coffee is more than just a drink—it’s a ritual. Whether it’s a velvety cappuccino, a strong espresso, or a delicate latte with hints of vanilla, each cup is crafted with care, meant to be savored sip by sip.";
    let part4Text = "Here, coffee is more than just a drink—it’s a ritual. Whether it’s a velvety cappuccino, a strong espresso, or a delicate latte with hints of vanilla, each cup is crafted with care, meant to be savored sip by sip.";
    let part3Text = "The large windows offer a perfect view of the square, where life unfolds like a slow-moving painting—children chasing pigeons, street musicians filling the air with melodies, and the golden glow of the afternoon sun reflecting off the cobblestonesis more than just a drink—it’s a ritual. Whether it’s a velvety cappuccino, a strong espresso, or a delicate latte with hints of vanilla, each cup is crafted with care, meant to be savored sip by sip.";

    // Element Creation
    let homeEl = new DomElement("div", "home");
    homeEl.create();

    let containerEl = new DomElement("div", "container");
    containerEl.create();

    let part1El = new DomElement("div", "part1");
    part1El.create();

    let p1Img = new DomElement("img");
    p1Img.create();
    p1Img.dElement.src = cafe;

    let p1textEl = new DomElement("p", "txt");
    p1textEl.create();
    p1textEl.setText(part1Text);

    let part2El = new DomElement("div", "part2");
    part2El.create();

    let p2textEl = new DomElement("p", "txt");
    p2textEl.create();
    p2textEl.setText(part2Text);

    let p4textEl = new DomElement("p", "txt");
    p4textEl.create();
    p4textEl.setText(part4Text);

    let p2_l_Img = new DomElement("img");
    p2_l_Img.create();
    p2_l_Img.dElement.src = designer10;

    let p2_r_Img = new DomElement("img");
    p2_r_Img.create();
    p2_r_Img.dElement.src = designer10;


    let rightEl = new DomElement("div", "right");
    rightEl.create();

    let leftEl = new DomElement("div", "left");
    leftEl.create();

    let part3El = new DomElement("div", "part3");
    part3El.create();

    let p3Img= new DomElement("img");
    p3Img.create();
    p3Img.dElement.src = designer8;

   
    let p3text1El = new DomElement("p", "txt");
    p3text1El.create();
    p3text1El.setText(part3Text);
  
    let p3text2El = new DomElement("p", "txt");
    p3text2El.create();
    p3text2El.setText(part3Text);
      // End Element Creation

    
    // Append Element
    
    contentEl.appendChild(homeEl.dElement);

    homeEl.dElement.appendChild(containerEl.dElement)

    containerEl.dElement.appendChild(part1El.dElement);
    containerEl.dElement.appendChild(part2El.dElement);
    containerEl.dElement.appendChild(part3El.dElement);

    part1El.dElement.appendChild(p1Img.dElement);
    part1El.dElement.appendChild(p1textEl.dElement);

    
    part2El.dElement.appendChild(rightEl.dElement);

    rightEl.dElement.appendChild(p2_l_Img.dElement);
    rightEl.dElement.append(p4textEl.dElement);
    leftEl.dElement.appendChild(p2_r_Img.dElement);
    leftEl.dElement.appendChild(p2textEl.dElement);

    part2El.dElement.appendChild(leftEl.dElement);
    
    part3El.dElement.appendChild(p3text1El.dElement);
    part3El.dElement.appendChild(p3Img.dElement);
    part3El.dElement.appendChild(p3text2El.dElement);
    // End Append Element

});

export { load_home_page };
