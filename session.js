"use strict";


let session = {};
session.title = 'Brave New World';
session.description = "<p> Humans interact with computers in many ways and our world is increasingly shaped by these interactions.HCI(Human - Computer Interaction) is a field of study that researches, it's in the self-explanatory name, the interaction of humans and computers. It is a field where computer sciences meets many  other fields of study such as design, media studies, psychology and behavioural sciences. Computers are used for many purposes and their use is based upon a dialog between humans and computers. According to Wikipedia 'the notion of dialog likens human - computer interaction to human - to - human interaction, an analogy the discussion of which is crucial to theoretical considerations in the field.'</p>";

// Tasks

let task1 = {};
task1.title = 'Get up to speed with the terms ';
task1.description = "<p>HCI studies the ways in which humans create and make use of interfaces. Much of the research done is aimed at imporving those interfaces and thus improve the quality of human-computer interaction. The term HCI was made popular by a 1983 book 'The psychology of Human - Computer Interaction' and since then has been a field where much research takes place.</p>"; 

task1.resources = [
 { 
    link: "http://www-personal.umich.edu/~itm/688/wk7/CMN-ch2.PDF",
     description: "Card, Stuart, Thomas Moran, Allen Newell. 'Chapter 2: The Human Information - Processor ' in: The Psychology of Human-Computer Interaction."

 },  
 {
    link: "http: //bookzz.org/s/?q=human+computer+interaction+dix&t=0",
description: "Dix, Alan e.a. 'Part 1: Foundations.' In: Human-Computer Interaction."
},
{
  link: "http://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction",
  description: "Wikipedia: Human-Computer Interaction"
}
  ];


let task2 = {};
task2.title = 'Will you survive?';
task2.description = ` < p > Of course, HCI is not just about what end - users do and how programmers and
designers need to work in order to optimise the interaction.We need also be
critical about the implications HCI has in our lives.What are the benefits and
costs of the increasing presence of technology in our lives ? Most people are only
end - users and do not understand what goes on 'under the hood'.This poses a
whole new power / knowledge relation, that already proves to be subject of much
discussion. < /p>

<p>Come up with three examples of how computers have negatively changed the way 
we interact with each other and with the physical world. Be specific, and be 
original. Submitting phone messaging as an answer does not count. 
Post your examples on Slack and reply to at least two examples of someone else
counter-arguing. How has their example positively impacted the world?</p > `;

task2.resources = [{
  link: "http://www.philosophyexperiments.com/stayingalive/Default.aspx",
  description: "Staying Alive: the game"
}, {
  link: "http://us8.campaign-archive1.com/?u=96773211c8585e668a0e50d12&id=0dd8bdffd6",
  description: "Event: Digital storytelling as journalism"
}, ];


let task3 = {};
task3.title = 'Build a game';
task3.description = ` < p > Websites, spreadsheets, software programs etc.etc.are all designed to ease
HCI.Now it is time to create something interactive ourselves, since after all,
we are learning how to program.To that end the last assignment will be to build
a game.You can create whatever kind of game you like, as long as the end - user
is required to interact with the computer.As an example, you can have a look
at the code I used in my attempt to recreate the Staying Alive game above.
Unfortunately, the last part of it is not yet working, but it should give
you something to go on at least. < /p>`;

task3.resources = [
  {
    link: "http://plnkr.co/edit/rImNZ6dOYcxSLANFs1fv?p=info",
    description: "Staying Alive: the partial remake"
  },
  {
    link: "http://www.tandfonline.com/doi/pdf/10.1080/10447310802546732",
    description: "Qin, Hua, Patrick Rau Pei-Luen, Gavriel Salvendy. 'Measuring Player Immersion in the Computer Game Narrative'."
  },
 { 
   link: "http://bookzz.org/s/?q=Foundation+Game+Design+with+HTML5+and+JavaScript&t=0",
   description: "Van der Spuy, Rex. Foundation Game Design with HTML5 and Javascript."
 }
];



session.tasks = [task1, task2, task3];

console.log(session);

