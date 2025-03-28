# restaurant-page-
By The Odin Project


## Design

#### Use only js for DOM element

1. html skeleton inside src/template.html
2. add header > nav with buttons for different tabs (e.g. Home, Menu, About)
3. add single div#content below header

4. console.log statement inside src/index.js & run npx webpack serve

5. create homepage inside the div#content

#### 6. Homepage
- image
- headline
- some text

7. remove the stuff inside div#content
8. create the stuff using js only one by one
9. write initial page-load fun() inside its own module
    load_home_page()
        create home div
        create container div

            create part1 div
                insert img
                insert p tag

            create part2 div
                insert left
                    insert img
                    insert p tag

                insert right
                    insert img
                    insert p tag

            create part3 div
                insert p
                insert img
                insert p
        



10. import this page-load fun() and call it inside the index.js


#### 11. Set up tabs
- put each tab's content inside its own module
- for each module export a fun() that creates a div El 
    - add the appropriate content & styles to div El and append to DOM

- write tab-switching logic inside index.js file
- event listeners for each button of tab
    - wipes out current content of div#content & run correct tab module append new content