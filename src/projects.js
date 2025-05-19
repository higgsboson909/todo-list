let projects = [];

let createProject = (name) => {
    let num = projects.length;
    
    let project = {
        name: name,
        todo: []
    };

    projects.push(project);

};

function deleteProject (pName) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == pName) {
            projects.splice(i, 1);
        }
    }
}

function editProjectName (oldName, newName) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == oldName) {
            projects[i].name = newName;
        }
    }
}

createProject ("Ai");
createProject ("Python");
createProject ("Zig");

export { projects, createProject, deleteProject, editProjectName };