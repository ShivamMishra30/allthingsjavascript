// var greeting = "Hello";
// function helloWorld(){
//     this.name = "World";
//     punct = "!"
// }

// function createInc(startValue){
//     return (step) => {
//         startValue += step;
//         return (startValue);
//     }
// }

// javascript use function scope
//
const scores = [15, 32, 37, 43, 50, 69];

// arr.forEach(function(item, index, theArr){
//     theArr[index] = item * index;
// }) orignal arr ko change krta h

// const arr2 = arr.map(function(val){
//     return val * val
// })

// const arr2 = arr.filter((val) => {
//     return val > 5;
// })

// if(arr.every(function(val){
//     console.log(val)
//     return val > 8;
// })){    predicate function
//     console.log("Someone scored over 8")
// } else {
//     console.log("No one scored over 8")
// }
// function isEven(elem){
//     return elem > 0;
// }

// console.log(arr.every(isEven))

// const corrArr = "the correct is".(2, 6);

// var max = arr.reduce(highestVal);
// console.log(max +" is the highest value")
// arr.filter()
// function highestVal(val1, val2){
//     return (val1 > val2) ? val1 : val2;
// }

// var str = "NikhilSingh234@gmail.com";
// const parts = str.split("@")[0];
// // const part2 = parts.join("-")

// let total = arr.reduce(function(acc, val){
//     return acc + val
// },0)

// let highScored = largeArray.reduce(function(acc, val){
//     if(val > acc){
//         return val;
//     } else {
//         return acc;
//     }
// })

// let ans = "Awesome";
// let cAns = "Awesome";

// let checkMatch = function(resp, corr){

//     if(resp.length === corr.length){
//         return corr.every(function(word, idx){
//             return word.toLowerCase() === resp[idx].toLowerCase()
//         })
//     } else {
//         return false;
//     }
// }
// let result = checkMatch(ans.split(" "), cAns.split(" "))
// console.log(result);

// console.log(highScored)
// const par = "Never odd or even."

// const reverse = function(str){
//     return [...str].reverse().reduce(function(acc, val){return acc + val})
// }
// console.log(reverse(par))

// let arrayShuffle = function(arr){
//     let newPos,
//         temp;
//     for(let i = arr.length - 1; i>0; i--){
//         newPos = Math.floor(Math.random() * (i + 1));
//         temp = arr[i];
//         arr[i] = arr[newPos]
//         arr[newPos] = temp;
//     }
//     return arr;
// }
// let newArray = arrayShuffle(array)
// console.log(newArray)

// const removeEl = function(arr, idx){
//     let newArray = [...arr];
//     newArray.splice(idx,1);
//     return newArray;
// }
// let newArray = removeEl(array, 3);

// let arr = [{name: 'moe', age: 400}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

// // arr.sort(function(a, b){
// //     return a.age - b.age
// // })
// _.sortBy(arr, 'age')

// var minMax = scores.reduce((acc, score) => {
//     return [Math.min(acc[0], score), Math.max(acc[1], score)]
// // }, [100, 0])

// const arrayToHtmlList = (arr, listID) =>
//   (el => (
//     (el = document.querySelector('#' + listID)),
//     console.log(el)
//     (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
//   ))();

// arrayToHtmlList(['item 1', 'item 2'], 'myID');

// const elementsIndex = function (arr, elem) {
//   return arr.reduce(
//     (obj, val, idx) => {
//       if (elem === val) obj[elem] = obj[elem].concat(idx);
//       return obj;
//     },
//     { [elem]: [] }
//   );
// };

// const repeatingEntries = function (mainArr) {
//   let uniqSet = new Set(mainArr);
//   let repeatedElements = [];
//   for (let elem of uniqSet) {
//     repeatedElements.push(elementsIndex(mainArr, elem));
//   }
//   return repeatedElements;
// };
// console.log(repeatingEntries(nums));

// const countedValues = (arr) => {
//   const uniqueValues = arr.filter((x, i) => arr.indexOf(x) === i); // instead of new Set
//   return uniqueValues.map((uniq) => {
//     return arr.reduce(
//       (acc, val, idx) => {
//         if (val === uniq) acc[uniq].push(idx);
//         return acc;
//       },
//       { [uniq]: [] }
//     );
//   });
// };
// const nums = [8, 9, 8, 6, 4, 3, 2, 1, 9, 1, 8];

// const getRepeatedItemIndexes = (array) => {
//   return array.reduce((accum, number, index) => {
//       if (!accum[number]) {
//           accum[number] = [index];
//       } else {
//           accum[number] = [...accum[number], index];
//       }
//       return accum;
//   }, {});
// };

// console.log(getRepeatedItemIndexes(nums));

// const arrayHasSameElements = function(arr1, arr2){
//   let getCount = function(arr, val) {
//     return arr.reduce((count, currVal)  => (currVal === val ? 1 : 0) + count,0)
//   }
//   return arr1.length === arr2.length && arr1.reduce((check, val) => {
//     check &&
//     getCount(arr1, val) === getCount(arr2, val)
//   }, true)
// }

// console.log(arrayHasSameElements([1,3,2,3], [1,2,3,1]));

// const usingSort = function(arr1, arr2){
//   if(arr1.length !== arr2.length){
//     return false
//   }
//   if(arr1.sort().toString() !== arr2.sort().toString()){
//     return false
//   }
//   return true
// }
// console.log(usingSort([1,2,3],[1,2,3]))

// function checkUniqueItems(arr1, arr2) {
//   const dataObj = {
//     one: {},
//     two: {},
//   };
//   for (let i = 0; i < arr1.length - 1; i++) {
//     let itemOne = arr1[i];
//     let itemTwo = arr2[i];

//     dataObj["one"][itemOne] = dataObj["one"][itemOne]
//       ? dataObj["one"][itemOne] + 1
//       : 1;

//     dataObj["two"][itemTwo] = dataObj["two"][itemTwo]
//       ? dataObj["two"][itemOne] + 1
//       : 1;

//       return true;
//   }
// }

// function checkArraysByRepeatedItem(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   if (arr1.every((val) => arr2.includes(val)) && checkUniqueItems(arr1, arr2)) {
//     return true;
//   }
//   return false;
// }
// console.log(checkArraysByRepeatedItem([1, 2, 3, 2, 3], [1, 2, 3, 2, 3]));

// function* randomElement(arr){
//   let elem,
//     len= arr.length;
//     while(len > 0){
//       let rand = Math.floor(Math.random() * len);
//       elem = arr.splice(rand, 1)[0];
//       yield elem;
//       len = arr.length;
//     }
// }

// const randScrores = randomElement(scores)
// console.log(randScrores)

// const obj = {
//   name: "Moe",
//   age: 50,
// };
// function func1(term){
//   return term;
// }
// function User(){
//   this.name = "Moe";
//   this.age = 50;

// }

// var user1 = new User();

// User.prototype.sayHi = function(){ console.log("Hello "+this.name)};
// var user2 = new User();

// function test(arr1, arr2){
//   arr1 = arr2;
//   arr1.push(4);
//   console.log(arr1)
//   console.log(arr2)
// }

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// test(arr1, arr2)
// console.log(arr1);
// console.log(arr2);//object are passed by reference and are mutable

// const pullScores = (obj, section = 0) => {
//   let scores = {};
//   if (section === 0) {
//     scores = Object.assign(obj.scores);
//   } else {
//     for (let key in obj.scores) {
//       if(key.includes('s'+ section)){
//         scores[key] = obj.scores[key];
//       }
//     }
//   }
//   return scores;
// };

// let learner= {
//   name: "Moe",
//   scores: {
//     s1q1: 10,
//     s1q2: 20,
//     s1q3:11,
//     s2q1: 20,
//     s3q1: 30,
//   }
// }
// console.log(pullScores(learner, 1));

// setTimeout(() =>  console.log("Hello"), 1000);

// let person = [
//   { id: 1, name: "Moe", email: "Shivam@gmail.com" },
//   { id: 2, name: "Larry", email: "Nikhil@facbook.com" },
// ];

// let result = person
//   .filter((obj) => obj.email.indexOf("@gmail.com") > -1)
//   .map((item) => item.name);
//  console.log(result);

let beers = ["Corona", "Heineken", "Guinness", "Budweiser", "Miller", "Pabst"];
let stuff = [22, "Meo", false, beers];

// // myFunc(...stuff)
// // function myFunc(name, age, isStudent, beerList){
// //     isStudent || console.log(name , 'is', age);
// //     let b = ['Turberg', ...beerList];
// //     b.forEach((item, idx) => {
// //         return console.log(idx, item)
// //     })
// // }
// let one, two, three;
//     [one, two, ...rest] = beers;
//     console.log(one, two, rest.length)

// function otherFunc(name, age, [one, two]){
//     // console.log(list)

//     // let start, end;
//     // const [start, end] = list;
//     console.log(one, two);

//     // list.forEach((item, idx) => {
//     //     console.log(item, idx)
//     // })
// }

// otherFunc('Shivam', 22, beers)

// function drawChart({ size = "big", coords = { x: 0, y: 0 }, radius = 25 }) {
//   console.log(size, coords, radius);
//   // do some chart drawing
// }
// drawChart({
//     size: 'small',
//   coords: { x: 18, y: 30 },
//   radius: 30,
// });
// const rand = () => Math.floor(Math.random() *10) +1;
// let p1 = new Promise((res, rej) => {
//     let x=5;
//     // res(x);
//     let num = rand();
//     setTimeout(rej, 3000, num);
//     // rej(x);
// }).then((result) => {
//     console.log(result)
//     return result * 2;
// }).catch((ex)=> {
//     console.log(ex, 'Caugth')
//     return ex * 2;
// })

// const uri = 'https://jsonplaceholder.typicode.com/users/1';
//         const initDetails = {
//             method: 'get',
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8"
//             },
//             mode: "cors"
//         }

//         function GetData() {

//             fetch( uri, initDetails )
//                 .then( response =>
//                 {
//                     if ( response.status !== 200 )
//                     {
//                         console.log( 'Looks like there was a problem. Status Code: ' +
//                             response.status );
//                         return;
//                     }

//                     console.log( response.headers.get( "Content-Type" ) );
//                     return response.json();
//                 }
//                 )
//                 .then( myJson =>
//                 {
//                     console.log( JSON.stringify( myJson ) );
//                 } )
//                 .catch( err =>
//                 {
//                     console.log( 'Fetch Error :-S', err );
//                 } );
//         }

// const root = 'https://jsonplaceholder.typicode.com';
// let id = Math.floor(Math.random() * 10) + 1;
// let url = `${root}/users/${id}`;


// const result = fetch(url).then(
//     (response) => {
//         return response.json();
//     }
//     ).then(
//         (data) => {
//             let jsonData = JSON.stringify(data);
//             console.log(data);
//             console.log(jsonData);
//             const { name, email } = data;
//             console.log(name, email);
//             let display = document.getElementById('data');
//             display.innerHTML = `<h1>${name}</h1><h2>${email}</h2>`;
//             const li = display.appendChild(document.createElement('li'));
//             li.textContent = `${name} ${email}`;
//             // li.textContent = jsonData;
//             const btn = document.createElement('button');
//             btn.textContent = ` Hi, ${name} `;
//             document.body.appendChild(btn);
//             btn.addEventListener('click', () => {
//                 GetData();
                
//             })
//         }
//     )
// .catch((err) => {console.log(err)});

// let formdata = new FormData();
// formdata.append('userid', 1);
// formdata.append('title', 'foo');
// formdata.append('body', 'bar');

// const root = 'http://jsonplaceholder.typicode.com/';
// let uri = root + 'posts';
// let option = {
//     method: 'POST',
//     mode: 'cors',
//     body: formdata
// }


// let req = new Request(uri, option);

// fetch(req).then((response)=>{
//     if(response.ok){
//         return response.json();
//     } else {
//         new Error("Error");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// })

// function greet(msg){
//     return function(name){
//         console.log(msg, name);
//     }
// }
// // this is functin currying
// let eng = greet('Hello');
// let hin = greet('Namaste');
// eng('Shivam');  
// hin('Shivam');

// let objIIFE = (function(){
//     let myPrivateVar = 'Hello';
//     let myPrivateFunc = function(word){
//         console.log(word);
//     };
//     return {
//         myPublicVar: 'foo',
//         init: function(){
//             myPrivateFunc(myPrivateVar);
//         }
//     }
// })();
// // objIIFE.init();

// let objNS = {
//     myPrivateVar: 'Hello',
//     myPrivateFunc: function(word){
//         console.log(word);
//     },
//     init: function(){
//         this.myPrivateFunc(this.myPrivateVar);
//     }
// }
// objNS.init();

// let box = document.querySelector('.box');

// let myFunc = function(e){
//     // console.log(e.target);
//     console.log(this);
// }
// let myFunc2 = (e) =>{
//     // console.log(e.target);
//     console.log(this);
// }
// box.addEventListener('click', myFunc);
// box.addEventListener('click', myFunc2);
// // myFunc.call(box);
// myFunc.call(box);
// myFunc();
// // myFunc.call(window);
// var btns = document.querySelectorAll('.button');
// for(let i = 0; i<btns.length; i++){
//     btns[i].addEventListener('click', function(e){
//         console.log(i);
//     })
// }

// //finite state machine
// const machine = {
//     state: "SOBER",
//     transitions: {
//       SOBER: {
//         drink: function(beverage, second) {
//           console.log("current state", this.state);
//           console.log("\tdrinking", beverage.type); //second would be undefined
//           if (beverage.type == "alcohol") {
//             console.log("\tAdios inhibitions!");
//             this.changeState("DRUNK");
//           } else {
//             console.log("\tThat quenched my thirst!");
//           }
//         }
//       },
//       DRUNK: {
//         drink: function(beverage) {
//           console.log("current state", this.state);
//           console.log("\tdrinking", beverage.type);
//           if (beverage.type == "alcohol") {
//             console.log("\tAdios pants!");
//             this.changeState("REALLYDRUNK");
//           } else {
//             console.log("\tI said what?");
//             this.changeState("SOBER");
//           }
//         }
//       },
//       REALLYDRUNK: {
//         drink: function(beverage) {
//           console.log("current state", this.state);
//           console.log("\tdrinking ", beverage.type);
//           if (beverage.type == "alcohol") {
//             let dice = Math.floor(Math.random() * 2); // 0 or 1
//             if (dice) {
//               this.dispatch("throwup", {});
//             } else {
//               this.dispatch("passout", {});
//             }
//           } else {
//             this.changeState("DRUNK");
//           }
//         },
//         passout: function() {
//           console.log("\tPassing out. zzzzzzzzz");
//           this.changeState("ASLEEP");
//         },
//         throwup: function() {
//           console.log("\tBlaaaaaaaaaaa....When did I eat that?");
//           this.dispatch("passout", {});
//         }
//       },
//       ASLEEP: {
//         wake: function() {
//           console.log("current state", this.state);
//           console.log("\tWaking up.");
//           this.changeState("HUNGOVER");
//         }
//       },
//       HUNGOVER: {
//         openeyes: function() {
//           console.log("current state", this.state);
//           console.log("\tTurn off the sun please");
//         },
//         drink: function(beverage) {
//           console.log("current state", this.state);
//           console.log("\tdrinking", beverage.type);
//           if (beverage.type == "alcohol") {
//             console.log("\tIs it never again yet?");
//             this.changeState("DRUNK");
//           } else {
//             console.log("\tNever again.");
//             this.changeState("SOBER");
//           }
//         }
//       }
//     },
//     dispatch(actionName, ...payload) {
//       const actions = this.transitions[this.state];
//       const action = this.transitions[this.state][actionName];
//       console.log(action);
//       console.log(actionName);
//       console.log(...payload);
//       if (action) {
//         action.apply(machine, ...payload);
//       } else {
//         //action is not valid for current state
//       }
//     },
//     changeState(newState) {
//       //validate that newState actually exists
//       this.state = newState;
//     }
//   };
  /** */
//   let Jeff = Object.create(machine, {
//     name: {
//       writable: false,
//       enumerable: true,
//       value: "Jeff"
//     }
//   });
  /**
   * 
   */

  // Jeff.dispatch("drink", [{ type: "alcohol" }]);
  // Jeff.dispatch("drink", [{ type: "alcohol" }]);
  // Jeff.dispatch("drink", [{ type: "alcohol" }]);
  // Jeff.dispatch("wake");
  // Jeff.dispatch("openeyes");
  // Jeff.dispatch("drink", [{ type: "water" }]);
  // Jeff.dispatch("drink", [{ type: "water" }]);
  
  // Jeff.dispatch("eat");
  // console.log(Jeff.state);

  // const myFunc = (function buildFunc(){
  //   const memo = {};
  //   const getKey = (...args) => {
  //     let key = `${args.join('-')}`;
  //     return key;
  //   }
  //   return (args) => {
  //     let key = getKey(...args);
  //     if(memo[key]){
  //       return memo[key];
  //     } else {
  //       let sum = 0;
  //       for(let i = args[0]; i > 0 ; i--){
  //         sum += args[0] * args[1];
  //       }
  //       memo[key] = sum;
  //     }
  //   }
  // })();

  // let start = Date.now();
  // myFunc([9000, 1000]);
  // myFunc([9000, 1000]);
  // myFunc([9000, 1000]);
  // // myFunc([9000, 1000]);
  // // myFunc([9000, 1000]);
  // myFunc([9000, 1000]);
  // let end = Date.now();
  // console.log(end - start);

//   function rick() {
//     console.log(this);
//     //function declaration
//     console.log(this.name);
//   }
//   let morty = function() {
//     //function expression
//     //console.log("I don't think that this is such a good idea Rick.");
//     console.log(this);
//   };
//   let summer = f1 => {
//     //arrow function
//     console.log(this);
//     console.log("About to call another function");
//     f1(); // f1.call(), f1.apply()
//   };
//   let o = {'name': 'Rick', 'age': 'unknown', 'sayHi': rick};
// let m = morty.bind(o);
// rick.call(o, 'Rick');
// summer(rick);
// function Meeseeks() {
//   //constructor function
//   console.log("I'm Mr. Meeseeks.");
//   this.hello = function() {
//     console.log("hello");
//   };
//   this.goodbye = () => {};
// }
// Meeseeks.prototype.help = function() {
//   //objects of type Meeseeks will be able to use this function
//   console.log("Look at me.");
// };
// let me = new Meeseeks(); //4. call a constructor using new
// console.log(me);
// me.help(); //5. call a method on the prototype of an object
// me.hello(); //6. call a method on an object

// let names = ["Rick", "Morty", "Summer", "Beth", "Jerry", "Mr. Meeseeks"];
// Array.prototype.justLetter = function(letter){
//   // let result = [];
//   // for(let i = 0; i < this.length; i++){
//   //   if(this[i].charAt(0) === letter){
//   //     result.push(this[i]);
//   //   }
//   // }
//   // return result;
//   let arr = this.filter((item) =>{
//     return item.indexOf(letter) > -1;
//   })
//   return arr;
// }
// console.log(names.justLetter('R'));

// let obj = {
//   name: "Rick",
//   age: "unknown",
// }
// let handler= {
//   get: function(target, prop){
//     if(prop in target){
//       return target[prop];
//     }
//     return this.default;
//   },
//   default: 'not found',
// }
// let proxy = new Proxy(obj, handler);
// console.log(proxy.lastName);

// function allLongestStrings(inputArray) {
//   let longest = inputArray.reduce((acc, curr) => {
//     return acc.length > curr.length ? acc : curr;
//   });
//   console.log(this)
//   return inputArray.filter((item) => {
//     return item.length === longest.length;
//   });
// }
// let arr = ["aba", "aa", "ad", "vcd", "aba", "dalsdklsaldkl"];
// console.log(allLongestStrings.call(arr, arr));


// function maximumConsecutiveSum(){
//   let max = 0;
//   let arr = [2,3, -8,4,5,4]
//   let sum = 0;
//   for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
//     if(sum>max){
//       max = sum;
//     }
//     if(sum<0){
//       sum=0;
//     }
//   }
//   return max;
// }
// function arrayPerviousLess(){
//   let arr = [1,2,3,4,5,1];
//   let result = [];
//   for(let i = 0; i<arr.length;i++ ){
//     for(let j = i+1; j<arr.length;j++){
//       if(arr[j]<arr[i]){
//         result.push(arr[j])
//       }
//     }
//   }
//   return result;

// var Person = function(firstAndLast){
//   let array = firstAndLast.split(" ");
//   this.getfirstName = function(){
//     return array[0]
//   }
//   this.lastName = function(){
//     return array[1]
//   }

//   this.setFirstName = function(first){
//    array[0] = first;  
//   }
//   this.setlastName = function(last){
//     array[1] = last
//   }
//   this.setFullName = function(firstAndLast){
//     var arraySplit = firstAndLast.split(" ");
//     this.setFirstName(arraySplit[0])
//     this.setlastName(arraySplit[1])
//   }
// }
// let bob = new Person('Bob Ross');
// bob.getfirstName();

// function updateInventory(arr1, arr2){
//   for(var i=0; i< arr2.length; i++){
//     var inventoryExists = arr1.every(function(element){
//       return arr2[i][1] = element[1];
//     });
//     if(inventoryExists){
//       arr1.push(arr[i]);
//     } else {
//       var indexVal = arr1.findIndex(function(element){
//         return element[1] === arr2[i][1]
//       });
//       arr1[indexVal][0] += arr[i][0]
//     }
//   }
//   return arr1;
// }
// Pipe and compose
// Pipe and compose are higher order function
// higher order function are function which take func as a parameter and return func or both

// const add2 = (x) => x + 2;
// const subtract1 = (x) => x -1;
// const multiplyBy5 = (x) => x * 5;

// const result = multiplyBy5(subtract1(add2(4)));
// console.log(result);
// .some and .every allow a logical connective of array values
// while some combine the return value with or and every combine return value with and 
// [false, true].some((value)=> {value})

// [true, true].every((value)=> {console.log(value)})


let obj = {
  name: "aman",
  def: function (){
    console.log(this)
  }
}

obj.def();

let ghi = obj.def.bind(obj);
ghi();

