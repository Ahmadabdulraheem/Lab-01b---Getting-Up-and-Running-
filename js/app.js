let userName = prompt('Please enter you name!');

console.log(userName);

alert('Welcome ' + userName + ' to our website');


console.log(`You name is ${userName}, welcome to our website`);

let favPlace = prompt('Hi, I am your assistant Bot ; could you tell me which country you like the most?');
alert('you are lucky ' + userName + ' there is an offer on visiting ' + favPlace );


let costRange = prompt('please pick the type of trip depending on your budget from 1 - 5 ( 1 for econmic adn 5 for speacial trip) ^_^');
alert('Well done! now lets go to the last move');
console.log(`the budget is ${costRange}, `);

let availability = prompt('so, when you want to book your trip?');
alert('please check the offers list to get a trip with ' + costRange + ' range cost to travel to ' + favPlace );

