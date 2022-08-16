// // console.log("hello");

// // () => {
// //     return 0;
// // }

// // let result = 3+5*8+10/2;
// // console.log(result);

// function colorOfVegitables(vegies){
//     let colorOfVegies = {
//         tomato : "Red",
//         carrot : "Orange",
//         cucumber : "Green",
//         cabbage : "Green",
//         potato : "Brown"
//     }
//     return colorOfVegies[vegies];
// }

// console.log(colorOfVegitables("tomato"));

// let array = [5,4,6,7,3];
// let max = Math.max(...array);

// console.log(max);

// function lengthOfArray(array){
//     console.log(array);
//     let [destructArray] = array;
//     console.log(destructArray);
//     return array.length;
// }


// console.log(array.map());

// let arrcallback = (e)=>{
//     console.log(e);
// };

// array.map(arrcallback)

// console.log(count);

// console.log(lengthOfArray([1,[2,3]]));

// function cutinHalfAndFloor(num){
//     num /= 2;
//     return Math.floor(num);
// }


// console.log( cutinHalfAndFloor(22) );




// function titleCaseEdit(title){
//     let f = 0;
//     let result = "";
//     for(let i = 0;i<title.length;i++){
//         if( title[i] === " " ){
//         f = 0;
//         result += " ";
//         continue
//         }
//         if(f === 0){
//             result += title[i].toUpperCase();
//             f = 1;
//         }else result += title[i];
//     }
//     return result;
// }

// function getHashTags(sentance){
//     if(sentance === "\0")
//     return null;

//     let hashTags = [];
//     let sentWord = sentance.split(" ");
//     let orderedWord = sentWord.sort((a,b)=>b.length - a.length);

//     orderedWord.map(e=> hashTags.push("#"+e));

//     if( orderedWord.length < 3 ){
//         return hashTags;
//     }
//     return hashTags.slice(0,3);

// }
// let titleHash = getHashTags("How the Avocado Became the Fruit of the Global Trade");

// titleHash.map(e=>console.log(e));


// let obj = {
//     value1: "property1",
//     value2: "property2",
//     value3: "property3"
// }

// console.log(JSON.stringify(obj));


// let bookList =  
// [
// {
//     name: "Javascript Good parts",
//     author:"Douglas Crockford",
//     stock:"10"
// },
// {
//     name: "A Smarter Way to Learn JavaScript",
//     author: "Mark Meyers",
//     stock:"12"
// },
// {
//     name: "Effective Javascript",
//     author:"David Herman",
//     stock:"0"
// }
// ]

// let filterarr = bookList.filter((e) => e.stock != 0).map((e)=>{
//     return {title: e.name, author: e.author}
// });

// console.log( filterarr );

// function fizzBuzz(start, end) {

// let fizzbuzzarr = [];
//     for(let i=start;i<=end;i++){
//         if(i%3==0 && i%5==0) fizzbuzzarr.push("FIZZBUZZ");
//         else if(i%5==0) fizzbuzzarr.push("BUZZ");
//         else if(i%3==0) fizzbuzzarr.push("FIZZ");
//         else fizzbuzzarr.push(i);
//     }
//     return fizzbuzzarr;
//   }
  
// let result = fizzBuzz(1, 15);

// result.forEach(e=> console.log(e));


function productOfNumbers(...values){
    return values.reduce((first,second)=> first*second*1)
}

console.log( productOfNumbers(10,20,30));