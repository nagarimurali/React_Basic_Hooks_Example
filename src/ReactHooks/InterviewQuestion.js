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

//let duplicateValue = [1, 3, 3, 55, 6, 8, 7, 7, 6, 99, 87, 67];

// 1-Duplicate Value
//================================================
// function removeDuplicateFun(arr){
//     return [... new Set(arr)];

// }

// console.log(removeDuplicateFun(duplicateValue))
//2...................................................................
// let removeDuplicate=duplicateValue.filter((value,index,self)=>{
//     return self.indexOf(value)===index
// })
//3.................................................................
// let removedupli=[];
// duplicateValue.forEach((value,index)=>{
//     if(!removedupli.includes(value)){
//         removedupli.push(value)
//     }
// })

// console.log(removedupli)
//---------------------------------------------------
//2-problem Reverse() Method
//============================================================

//let str ='Welcome to india';

// let result=str.split(' ').reverse().join(' ')
// //india to Welcome
// //without space jion and split aidni ot emocleW
// console.log(result)

// function reverseFun(pStr){
//     let reverValue=''

//     for(let i=pStr.length-1;i>=0;i--){
//         reverValue +=pStr[i]
//     }

//     return reverValue

// }

// console.log(reverseFun(str))
//................................................................

// let arr = ["apple", "banana", "orange", "grape"];

// let result= arr.join(' ').split(' ').reverse()
// out put:-(4) ['grape', 'orange', 'banana', 'apple']

// let result =arr.map((word)=>(word.split('').reverse().join("")))
// out put:-(4) ['elppa', 'ananab', 'egnaro', 'eparg']

// console.log(result)

//l-----------------------------------------------------------
// 3-Largest word
//===============================================================
//let str = "Hello Murali Developer Testnyyyyyyyyddd WelcomeToMurali";

// let words = str.split(" ");
// console.log(words);

// let reducerMethod = words.reduce(
//   (acc, cur) => {
//     if (cur.length > acc.maxLength) {
//       return { words: [cur], maxLength: cur.length };
//     } else if (cur.length === acc.length) {
//       acc.words.push(cur);
//     }
//       return acc;

//   },
//   { words: [], maxLength: 0 }
// ).words;

// console.log(reducerMethod);
//-------------------------------------------------------------------
//4-Find Second Largest Number:-
//=====================================================
//let arr = [2, 5, 8, 9, 34, 45, 7, 9, 23,566,78];
// let sortArrayValue=arr.sort((a,b)=>b-a);

// console.log(sortArrayValue[0]);
//------------------------------------------------------------
//5-COunt Vowels
//====================================================
// function countVowels(str) {

//     const vowelPattern = /[aeiou]/gi;

//     const vowels = str.match(vowelPattern);
//     return vowels ? vowels.length : 0;
// }

// let inputString = "Hello World laaaooooo";
// let vowelCount = countVowels(inputString);

// console.log("Number of vowels found:", vowelCount);
//......................................................

// function countVower(str){

// let vowels=['a','e','i','o','u'];
// let count=0;

// for(let char of str.toLowerCase()){
//     if(vowels.includes(char)){
//         count++
//     }

// }

// return count

// }

// console.log(countVower("banana"));
//------------------------------------------------------------

//6-Find Array length
//=====================================================================
//let arr = ["apple", "banana", "orange", "grape","pinApple"];

// let largestWord='';
// let maxlargestWordLength=0;

// for(let i=0;i< arr.length;i++ ){
//     if(arr[i]>maxlargestWordLength){
//         maxlargestWordLength=arr[i].length;
//         largestWord=arr[i]

//     }
// }

// console.log(largestWord)
//..................................................................
// let reduceMethod=arr.reduce((prevWord,currentWord)=>{
//     return(prevWord.length>currentWord.length)?prevWord:currentWord
// });
// console.log(reduceMethod);
//-----------------------------------------------------------------------

//7-Pillindrom method
//=====================================================================

// function pillindromFun(str){

//     let reverseValue= str.split('').reverse().join('')
//     return str===reverseValue

// }
// console.log(pillindromFun('madam'));
//-----------------------------------------------------------

//8-Anagrams
//======================================================================
// function anagramsFun(str1,str2){
//     let word1=str1.split("").sort().join('');
//     let word2=str2.split("").sort().join('');
//     return word1===word2

// }
// console.log(anagramsFun("listen","silent"));
//------------------------------------------------------------
//9-How to find primeNumber
//PrimeNumber
//=====================================================

// function isPrimeNumber(number) {
//   if (number === 1) {
//     return false;
//   }
//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(isPrimeNumber(11));
//----------------------------------------------------------
//10-FlattenArray
//==================================================
// let arr = [3, 4, 5, [6, 7, 8], 9, [23, 24], 90];

// function flattenArray(arrValue){
//     let result= arrValue.reduce((acc,curr)=>{
//         return Array.isArray(curr)?acc.concat(flattenArray(curr)):acc.concat(curr);
//     },[])

//     return  result
// }

// console.log(flattenArray(arr));
//....................................................................
// let arr = [3, 4, 5, [6, 7, 8], 9, [23, 24], 290,78];

// let result=arr.flatMap((item)=>Array.isArray(item)?item:[item])

// console.log(result);
//--------------------------------------------------------------------------------------
// 11-Find Factorial
//=====================================================================================


// function factorial(number2) {
// if(typeof number2==='number'){
//     if(number2===1 ||number2===0){
//         return 1
//     }else{
//         return number2*factorial(number2-1)
//     }

// }else{
//     return "Enter the Number"
// }
// }

// console.log(factorial(0));
// console.log(x);
// var x=20
// function fun(){

//     // var x=21
// }
// 
//=====================================================
// let view;

// function likeVideo() {
//     let count = 0;
//     return function () {

//         if (count > 0) {
//             console.log("this already call");


//         } else {
//             view = "yes";
//             console.log(view)
//             count++
//         }
//     }

// }
// let callFunc=likeVideo();
// callFunc();
// callFunc();
// callFunc();
//============================================================================


