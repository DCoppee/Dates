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
let today = new Date();
function findDays(anyDate,today) {
    let NbOfDays = today.getTime() - anyDate.getTime();
    return Math.ceil(NbOfDays/(1000*60*60*24));
}
let p6 = document.createElement('p');
body.appendChild(p6);
p6.innerHTML = findDays(anyDate,today) + ' days since your point of time.'

//Exercice 3
//Using timestamps, find the exact time and date we will be in 80000 hours.
let hereAndNow = new Date();
let manyHours = 80000*60*60*1000;
let future = new Date(hereAndNow.getTime()+manyHours);
let p7 = document.createElement('p');
body.appendChild(p7);
p7.innerHTML = 'In 80 000 hours, we will be the ' + future.toString();

//Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.
let thisTime = new Date();

let label = document.createElement('label');
label.setAttribute('for','hours');
let text = document.createTextNode('How many hours in the future?');
body.appendChild(text);

let newInput = document.createElement('input');
newInput.setAttribute('id','hours');
newInput.setAttribute('type', 'number');
body.appendChild(newInput);

let hoursValue = newInput.value;

function futureTime(thisTime,hoursValue){
    let hoursMs = hoursValue*60*60*1000;
    new Date(thisTime.getTime()+hoursMs);
}
let answer = futureTime(thisTime,hoursValue);

let div = document.createElement('div');
body.appendChild(div);

newInput.addEventListener('keyup', () => {
    div.textContent = answer;
    });