import React from "react";
import { useState, useEffect } from "react";

let apiUrl = "https://jsonplaceholder.typicode.com/users";

const InterviewQuestion = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const responce = await fetch(apiUrl);
      const userData = await responce.json();
      setData(userData);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = (id) => {
    const deleteUserData = data.filter((item) => item.id !== id);
    setData(deleteUserData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    let searchItem = e.target.value;
    setSearch(searchItem);
    if (searchItem === "") {
      console.log("no");
      fetchData();
    } else {
      const filterValue = data.filter((userName) =>
        userName.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      console.log(filterValue);
      setData(filterValue);
    }
  };

  return (
    <>
    <JavaScriptInteview/>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
      />
      <hr />
      <br />
      {data.length === 0 && <div>No user</div>}
      <div>
        {data &&
          data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid red", width: "500px" }}
            >
              <h6>{user.name}</h6>{" "}
              <span>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </span>
            </div>
          ))}
      </div>
      <CascadingDropdown/>
    </>
  );
};

export default InterviewQuestion;


function JavaScriptInteview(){


    function calu(input){
        let outPut=[];
        for(let i=0; i<input.length;i++){
            outPut.push(input[i]*i+input[input.length-1-i]*i);
        }
return outPut;
       
    }
let input=[2,7,11,4,-2]

    console.log( calu(input));

}




const countries = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] }
];

function CascadingDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
  };

  return (
    <div>
      <label htmlFor="countries">Select a country:</label>
      <select id="countries" onChange={handleCountryChange} value={selectedCountry}>
        <option value="">--Select Country--</option>
        {countries.map(country => (
          <option key={country.value} value={country.value}>{country.name}</option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <label htmlFor="cities">Select a city:</label>
          <select id="cities" value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
            <option value="">--Select City--</option>
            {countries.find(country => country.value === selectedCountry)?.cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

/*
import "./styles.css";
import {useState} from 'react';
export default function App() {
  const countries = [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
    { name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] }
  ];
 [ddCSelect,setddSelect]=useState('');
 const handleChange=(e)=>{
  console.log(e.target.value);
  setddSelect(e.target.value)

 }

 const MainObject = {
  Newton: ["Plato", "Aristotle"],
  Aristotle: ["Einstein"],
  Plato: ["Tesla", "Edison"],
  Einstein: ["Hawking"]
};

const output = {};

for (const key in MainObject) {
  const parent = key;
  console.log("parent",parent);
  const children = MainObject[key].join(', ');
  console.log("children",children);

  if (!output[parent]) {
    output[parent] = {};
  }
  output[parent]['child'] = children;

  MainObject[key].forEach(child => {
    if (!output[child]) {
      output[child] = {};
    }
    output[child]['parent'] = parent;
  });
}

console.log(output);
  return (
    <div className="App">
      <div>
     <select value={ddCSelect} onChange={handleChange}> 
     <option value={"0"}>--Select Country--</option>
      {countries&&countries.map((item,index)=><option key={index} value={item.value}>{item.name}</option>)}
     </select>
     </div>
     <br/>
     <div>
   
     <select  disabled ={ddCSelect?false:true}> 
     <option value={"0"}>--Select Country--</option>
      {countries&&countries.find((item)=>item.value===ddCSelect)?.cities.map((each,index)=><option key={index}>{each}</option>)}
     </select>
     </div>
    </div>
  );
}


*/




//First Method
// function reverseString(str){
//     return str.split("").reverse().join("")

// }

//Second Method

// function reverseString(str){
//     console.log(str.length)
//     let reversed="";
//     for(let i=str.length-1;i>=0; i-- ){
//         reversed+=str[i]
//     }
//     return reversed
// }

// console.log(reverseString("Hello Murali Developer Test"))

//3.longerst word

// Second Problem

// function findLongerst(str){
//     let words= str.split(" ");
//     let longerstWord= "";
//     for(let word of words ){
//         if(word.length>longerstWord){
//             longerstWord=word
//         }
//     }

//     return longerstWord

// }
// console.log(findLongerst("Welcome to India NagariMurali"))

//4.Pillindrom method

// function isPillindrom (str){

//     let reversedStr=str.split("").reverse().join("")

//     return str=== reversedStr

// }

// console.log(isPillindrom("jyj"))

//5. Remove Duplicates
// 1. methods
// function removeDuplicates(arr){
//     let uniqueValues=[];
//     for(let i=0 ;i<arr.length; i++ ){

//         if(uniqueValues.indexOf(arr[i])===-1){
//             uniqueValues.push(arr[i])
//         }
//     }

//     return uniqueValues
// }

//2 . method

// function removeDuplicates(arr){

//     return [... new Set(arr)]

// }

//  console.log(removeDuplicates([1,2,2,4,3,6,5,5,7,8,99,77,56,77,56]))

//6. Anagrams

// function areAnagrams(str1, str2){
//     const sortStr1=str1.split('').sort().join('');
//     const sortStr2=str2.split('').sort().join('');

//     return  sortStr1===sortStr2

// }

// console.log(areAnagrams('listen','silent'))

//7.Vowel Count

//  function vowelCount(str){
//     let vowels=['a','e','i','o','u'];

//     let count=0;

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count
// }
// console.log(vowelCount("Hello Woreauld"))

//8 Find LongerstNumber

// function findLongerstNumber(arr){
//     let longerstNumber=arr[0];
//     for(let i=1;i<arr.length; i++){
//         if(arr[i]>longerstNumber){
//             longerstNumber=arr[i];
//         }
//     }
//     return longerstNumber
// }

// console.log(findLongerstNumber([2,5,78,8,9,1001,45,2907,399994]))

//9 prime Number

// function isPrimeNumber(number){
//     if(number===1){
//         return false
//     }

//     for(let i=2;i <=number/2;i++){
//         if(number%i===0){
//             return false
//         }
//     }
//     return true

// }

// console.log(isPrimeNumber(4))

// Find Factorial

// function factorial(num){
//     if(num===0 ||num===1){
//         return 1
//     }else{
//         return num*factorial(num-1)
//     }

// }
// const num = 0;
// console.log(`Factorial of ${num} is: ${factorial(num)}`);

//Remove Space

// function removeWhiteSpace(str){

// }

// function x(){
//     for(let i=0; i<=10;i++){
//         setTimeout(function (){
//             console.log(i)
//         },i*1000)
//       console.log(i)
//     }
// //   setTimeout(function (){
// //             console.log(i)
// //         },i*1000)

//     console.log("Hello welcome to my company")
// }
// x()
