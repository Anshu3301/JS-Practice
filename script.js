let Import;
/* import {sum} from "./export.js"
alert(sum(9,1));  */
 

let Immediate_Invoking;
// (function a(){
//     let x = prompt("Hi!");           
//     console.log(x);
// })()


let Event_Propagation_stopPropagation_preventDefault;
// let week1 = document.getElementById("week");
// console.log(week1);
// week1.addEventListener('click', function(e){
//     //e.preventDefault();
//     console.log("Week Clicked!");
// },true);


// let day1 = document.getElementById('day1');
// day1.addEventListener('click',function (e){
//   //e.stopPropagation();
//   console.log("Day 1 Clicked!");
// },true);

// document.getElementById('refer').addEventListener('click', function(e){
//   //e.preventDefault();
// })


let API_request_XMLHttpRequest;
// const url = "https://api.github.com/users/hiteshchoudhary";
// const xhr = new XMLHttpRequest()
// xhr.open('GET',url);
// xhr.send();

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data);

//         let imgURL = String(data["avatar_url"]);     // Object data accessing => data.xyz / data["xyz"]
//         //console.log(typeof imgURL);
//         document.getElementById('card').innerHTML = `<img src= ${imgURL} />`;    
//}}


let Current_Location_of_user;
// navigator.geolocation.getCurrentPosition(function(position) {
//     // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// }, function(error) {
//     // Handle errors using Switch case, if any
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             console.error("User denied the request for geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.error("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             console.error("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             console.error("An unknown error occurred.");
//             break;
//     }
//});  


let Promises;
/* const promiseOne = new Promise(function(resolve,reject){
  // Async task
  setTimeout(()=>{
    console.log("Executing Promise 1");
    resolve();
  },1000);                                         // Basic Syntax
})

promiseOne.then(function() {
  console.log("Promise 1 Resolved!");     */


let Chaining;
//  new Promise((resolve,reject) => {
//   // Async task
//    setTimeout(()=>{
//     let error = false /*true*/;
//     if(!error) {                                        // i.e. no error
//      console.log("Executing Promise 2");               
//      resolve({user:'Anshu',roll:6});                   // calling & passing param in resolve
//     }
//     else{
//       reject("Error Occured!");                        // calling & passing param in reject
//     }
//    },1000);                 
//  })
//  .then((data) => {              // i.e. data passed in resolve()
//    console.log(data);
//    return data.user;             // passing to next chained .then
//  })
//  .then((user) => {              // Chaining
//   console.log(user);
//  })
//  .catch((error) => {            // i.e. error passed in reject()
//   console.log(error);
//  })
//  .finally(() => {               
//   console.log("Task is either Resolve or Rejected!");
//  })                                                     


let async_await;
// const promiseThree = new Promise((resolve,reject) => {
//   //   // Async task
//      setTimeout(()=>{
//       let error = false /*true*/;
//       if(!error) {                                        // i.e. no error
//        console.log("Executing Promise 2");               
//        resolve({user:'Anshu',roll:6});                   // calling & passing param in resolve
//       }
//       else{
//         reject("Error Occured!");                        // calling & passing param in reject
//       }
//      },1000);                 
//    })

// async function consume_promiseThree() {                // Defining the Async Function
//   try{
//     let result = await promiseThree;                   // => .then/resolve 
//     console.log(result);               
//   }
//   catch(error){
//     console.log(error);                               // => .catch/reject
//   }
// }

// consume_promiseThree();                              // Calling the Async Function


let Hoisting;
/* x();
console.log(val);

function x(){
  console.log("Hoisted!");
  val = 5;                      // magic 😉
}
var val;        */


let call;
// function name_assign(username){
//    console.log("Called");
//    this.username = username;
// }

// function user(username,mail,password){
//   name_assign.call(this,username);

//   this.mail = mail;
//   this.password = password;
// }

// let user1 = new user('anshu04','a@fb.com', 123);
// console.log(user1);


let classes;
// class user{
//   constructor(username,mail,password){            // Constructor
//     this.username = username;
//     this.mail = mail;
//     this.password = password;
//   }
  
//    encryptPassword(){                             // Method
//        console.log(`${this.password}@abc`); 
//   }

//    static encryptMail(){                         // Method(Static)
//        console.log(`${this.mail}_123.com`);
//    }
    
// }


// class teacher extends user{
//        constructor(username,mail,password,degree){
//         super(username,mail,password);
//         this.degree = degree;
//        }
// }


// let user1 = new user('anshu04','a@fb.com', 123);
// let user2 = new teacher('anshu04','a@fb.com', 123,'BTech');
// console.log(user1);
// user1.encryptPassword();                  // Calling Method
// console.log(user2);
// user2.encryptPassword();
// console.log(user2 instanceof teacher);
// console.log(user2 instanceof user);
// console.log(teacher instanceof user);
// user2.encryptMail();                      // Calling Static Method


let Object_Methods;
/*  console.log(Object.getOwnPropertyDescriptors(Math));
Object.defineProperty(Math, 'PI', {
    writable: false,
    enumerable: false
  })
  console.log(Object.getOwnPropertyDescriptor(Math,"PI"));       */

/*  const user = {
   name: "Anshu",
   roll: 6,
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));
Object.defineProperty(user, 'name', {
     writable: false,
     enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));      */

/*  Object.freeze(user);
console.log(Object.isFrozen(user)); */

/*  let object_is;
console.log(+0 == -0);      // The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other. 
console.log(NaN === NaN);
console.log(Object.is(+0,-0));             
console.log(Object.is(NaN,NaN));     */


let getter_setter;
// class user {
//   constructor (name,password){
//     this.name = name;
//     this.password = password;
//   }

//   get x(){
//         console.log(`${this._password}.abc`);
//   }
//   set password(new_pass){
//        this._password = new_pass;
//   }
// }

// let user1 = new user('Anshu','ans@12345');
// user1.x;                                     // consuming Get

// user1.password  ='ans@54321';
// console.log(user1);


let LexicalScope_Closure;
/*   function outer(){
  let name = 'Anshu';
  function inner1(){                     // Define
    let roll = 6;
    console.log(`INNER_1:${name}`);
  }
  function inner2(){                    // Define
    console.log(`INNER_2:${name}`);
    //console.log(`Roll:${roll}`);        // No Access
  }
  inner1();                        // calling
  inner2();                        // calling
  //console.log(`Roll:${roll}`);        // No Access
}

outer();   */

/* function outer(){
  let name = 'Anshu';
  function inner(){
    console.log(`Name:${name}`);
  }
  return inner;
}

let getOuter = outer();
getOuter();          */


let try_throw_catch;
/* let x = 9;
try{
  //console.log(x);
  if(x!=5){throw ("Not 5!")}     // throw new Error("") => Error: Not 5!
}
catch(err){                     // err => "Not 5!"
  console.log(err);
}
finally{                         // will surely execute
  console.log("Executed!");
} 
*/



