/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   arr.map(item =>{
    if (item.profession === 'developer'){
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(item=>{
    if(item.profession === 'developer'){
      console.log(item);
    }
  })
}

function addData() {
  //Write your code here, just console.log
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeAdmin = arr.filter(item => item.profession !== 'admin');
  console.log(removeAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
  { id: 4, name: "Nitin", age: "26", profession: "programmer" },
  { id: 5, name: "Manish", age: "25", profession: "AI/Ml" },
  { id: 6, name: "Raghav", age: "25", profession: "C++ developer" },
];
let newArray = arr.concat(arr1);
console.log(newArray);
}
