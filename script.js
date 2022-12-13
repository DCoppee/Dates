//Exercice 1
//Heure à Charleroi
let now = new Date();
let body = document.body;
let p1 = document.createElement('p');
body.appendChild(p1);
p1.innerHTML = 'Brussels local time : '+ now;

//Heure à Anchorage
let newDateA = new Date();
let anch = newDateA.toLocaleString('en-US',{
    timeZone: "America/Anchorage",
});
let p2 = document.createElement('p');
body.appendChild(p2);
p2.innerHTML = 'Anchorage local time : '+ anch;

//Heure à Reykjavik
let newDateR = new Date();
let reyk = newDateR.toLocaleString('en-US',{
    timeZone: "Atlantic/Reykjavik",
});
let p3 = document.createElement('p');
body.appendChild(p3);
p3.innerHTML = 'Reykjavik local time : '+ reyk;

//Heure à Saint-Petersburg
let newDateS = new Date();
let stP = newDateS.toLocaleString('en-US',{
    timeZone: "Europe/Moscow",
});
let p4 = document.createElement('p');
body.appendChild(p4);
p4.innerHTML = 'Saint-Petersburg local time : '+ stP;

//Exercice 2
//Using timestamps, find how many days have passed since the date of your birth.
let myBirth = new Date('1982-08-23');
let ms = (now.getTime()-myBirth.getTime())/1000/60/60/24;
let p5 = document.createElement('p');
body.appendChild(p5);
p5.innerHTML = ms + ' days have passed since the date of my birth.';

//Write a function to find how many days have passed since any point in time (after 1970).
let anyDate = new Date('2022-12-10');
function findDays(anyDate,now) {
    let NbofDays = now.getTime() - anyDate.getTime();
    return Math.ceil(NbofDays/(1000*60*60*24));
}
let p6 = document.createElement('p');
body.appendChild(p6);
p6.innerHTML = findDays(anyDate,now) + ' days since your point of time.'

