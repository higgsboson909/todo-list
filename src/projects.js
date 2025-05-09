
let projects = [];

let createProject = (name) => {
    let num = projects.length;
    
    let project = {
        [`p${num}`]: name,
        todo: null 
    };

    projects.push(project);

};


createProject ("Ai");


export { projects, createProject };