
let projects = [];

let createProject = (name) => {
    let num = projects.length;
    
    let project = {
        [`p${num}`]: name,
        todo: []
    };

    projects.push(project);

};


createProject ("Ai");
createProject ("Python");

export { projects, createProject };