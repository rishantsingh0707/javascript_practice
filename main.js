// let name = "rishant";
// let userlocation = "pune";
// let favorite_food="fried chicken";
// let single = true;
// console.log("your name is "+ name);
// console.log("your favorite food is "+favorite_food);
// console.log("your user location is "+userlocation);

// console.log("bro is single "+single)
// console.log(typeof single)

// let arr = [1, 2, 3,4,10];
// arr.push(10);
// console.log(arr);


// arithmetic operators
//                       OPERANDS are (NUMBER, INTEGER ETC)
//                      OPERATORS are (+,-,*,/)

// let person=50

// person=person+5;
// person=person*3;
// person=person-33;
// person=person/2;
// person=person **2

// person*=3
//person/=5
//person+=12
//person-=3
//person**=2
//let person=2/4*3%6*33


// console.log(person)
// let personenames ;

// personenames=window.prompt("enter yourr name: ");

// console.log(personenames);

let usernames;

document.getElementById("submit").onclick = function(){
    usernames = document.getElementById("text").value;
    document.getElementById("myh1").textContent='hello '+usernames;
 
}