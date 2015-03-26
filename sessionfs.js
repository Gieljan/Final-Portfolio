// Session

let session = {};
session.title = 'Do Not Repeat Yourself';
session.description = `
<p>While a lot of people get into programming, because they think that they can 
get rich fast. D.R.Y. - not C.R.E.A.M. - is the most important acronym in 
software development. D.R.Y. stands for Do Not Repeat Yourself. Templating, 
looping, and iterating are all techniques that prevent you from doing the same 
thing twice. So now that we have gotten that out of the way, let's see how we 
can get rich after all.</p>
`;

// Tasks

let task1 = {};
task1.title = 'Let Others Work for You';
task1.description = `
<p>The most important rule of becoming a succesful entrepeneur is to do as 
little work as possible. Delegating tasks to a computer is a very good means to 
do so.</p>

<p>The nly problem is that the computer needs to get very precise instructions from
you, otherwise he will not listen. In JavaScript, the basic form of instruction 
is called a function. Learn how to use them effectively.</p>
`
task1.resources = [
 { 
    link: "http://eloquentjavascript.net/03_functions.html",
     description: "Haverbeke, Marijn. 'Chapter 3. Functions' in Eloquent JavaScript."
 }.
 {
   link: "http://archive.wired.com/wired/archive/14.06/crowds.html",
   description: "Wired. The Rise of Crowd Sourcing"
 }
];


let task2 = {};
task2.title =  'Make a Factory';
task2.description = `
<p>We now learned how to let a computer do exactly what we want. However, giving 
it the same orders all the time is still kind of tiresome. And all those jetset 
parties are not going to be attended by itself.</p>

<p>In order to make our workflow even more efficient, let's group things 
together into collections, so that we can iterate over them.</p>
`
task2.resources = [
  { 
    link: "http://eloquentjavascript.net/04_data.html",
     description: "Haverbeke, Marijn. 'Chapter 4. Data Structures: Objects and Arrays' in Eloquent JavaScript."
  },
  { 
    link: "http://eloquentjavascript.net/05_higher_order.html",
    description: "Haverbeke, Marijn. 'Chapter 5. Higher Order Functions' in Eloquent JavaScript."
  },
  {
    link: "http://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/",
    description: "Coyer, Chris. Loop Over querySelectorAll Matches"
  }
];


let task3 = {};
task3.title = 'Pimp your Equipment';
task3.description = 'bla';
task3.resources = [];


let task4 = {};
task4.title = 'Get C.R.E.A.M.';
task4.description = `
<p>If we want to get rich fast, we can learn a lot from the
Wu-Tang Clan. Unfortunately, their lyrics aren't very D.R.Y. Let's fix that! I 
already made some suggestions for you, but there's probably a lot more that you
want to dry-up.</p>

<p>When your done, put the link to your fork on slack. The deadline for this 
assignment is Friday the 20th</p>
`
task4.resources = [
  {
    link: "http://plnkr.co/edit/MhQjSguAN04lA47ZJktn?p=info",
    description: "C.R.E.A.M. Assignment"
  },
  {
    link: "http://techcrunch.com/2014/04/07/the-first-episode-of-hbos-silicon-valley-is-now-on-youtube/",
    description: "Mike Judge's Silicon Valley"
  }
];

session.tasks = [task1, task2, task3, task4];

console.log(session);
window.session = session;
