let tasks = session.tasks;

let createResources = (resources, insertionPoint) => {
  let resourceTemplate = document.querySelector('template#resource');
  [].forEach.call(resources, (resource) => {
    let newResource = document.importNode(resourceTemplate.content, true);
    newResource.querySelector('.resource a').href = resource.link;
    newResource.querySelector('.resource a').textContent = resource.description;

    insertionPoint.appendChild(newResource);
  });
}

let createTasks = (tasks, insertionPoint) => {
  let taskTemplate = document.querySelector('template#task');
  [].forEach.call(tasks, (task) => {
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
createTasks(tasks, tasksInsertionPoint);

document.querySelector('.session').appendChild(newSession);
