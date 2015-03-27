let tasks = session.tasks;

let createResources = function(resources, insertionPoint) {
  let resourceTemplate = document.querySelector('#resource');
  [].forEach.call(function resources(resource) {
    let newResource = document.importNode(resourceTemplate.content, true);
    newResource.querySelector('.resource a').href = resource.link;
    newResource.querySelector('.resource a').textContent = resource.description;

    insertionPoint.appendChild(newResource);
  });
};

let createTasks = function(tasks, insertionPoint){
  let taskTemplate = document.querySelector('#task');
  [].forEach.call(function tasks(task) {
    let newTask = document.importNode(taskTemplate.content, true);
    let resourcesInsertionPoint = newTask.querySelector('.resources');
  
    newTask.querySelector('.title').textContent = task.title;
    newTask.querySelector('.description').innerHTML = task.description;
    
   createResources(task.resources, resourcesInsertionPoint);
  insertionPoint.appendChild(newTask);
  });
};

let sessionTemplate = document.querySelector('template#session');
let newSession = document.importNode(sessionTemplate.content, true);

newSession.querySelector('.title').textContent = session.title;
newSession.querySelector('.description').innerHTML = session.description;

let tasksInsertionPoint = newSession.querySelector('.tasks');

document.querySelector('.session').appendChild(newSession);


