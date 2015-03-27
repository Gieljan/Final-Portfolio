"use strict";

let session = {};
session.title = ‘Title’;
session.description = "<p> What I want to do</p>";


let task1 = {};
task1.title = 'Task 1 ';
task1.description = '<p>No actual coding in class but a quick breakdown of simple programs – have a look classically on how they look. A look at games a look at website, what does what?</p>'; 

task1.resources = [
 { 
    link: “http://www.google.com”,
     description: “Link1”

 },  
 {
    link: "http://www.google.com",
description: “Link2"
},
{
  link: "http://www.google.com",
  description: “link3”
}
  ];


let task2 = {};
task2.title = 'Task2';
task2.description = `<p>"Theory about , discussion about the theory and how it relates back to coding – something that is mentioned as program.</p>'

<p>Subsection</p > ;

task2.resources = [{
  link: "http://www.google.com",
  description: “Link1”
}, {
  link: "http://www.google.com",
  description: “link3""
}, ];


let task3 = {};
task3.title = ‘Task3’;
task3.description = ` < p > Think about how you should go about coding this> what do you need to specify. In groups in class come up with a plan to discuss which steps need to be taken and what code is necessary fort this – Where do you start and why?
 < /p>`;

task3.resources = [
  {
    link: "http://www.google.com",
    description: “link1”
  },
  {
    link: "http://www.google.com",
    description: “Link2”
  },
 { 
   link: "http://www.google.com",
   description: “Link3”
 }
];



session.tasks = [task1, task2, task3];

console.log(session);
