// 2
// function colorofVeg(veg)
// {
//     let vegetables = 
//     {
//         Carrot:"Orange",
//         Tomato:"Red",
//         Cucumber:"Green",
//         Cabbage:"White",
//         Potato:"Brown"
//     };
//     return `Color of ${veg} is ${vegetables[veg]}`;
// }
// console.log(colorofVeg("Carrot"));

// 3
// let array = [5,4,6,7,3];
// console.log(maxofArray(array));
// function maxofArray(arr)
// {
//     return `Maximum of Array is ${Math.max(...arr)}`;
// }

//4
// let arr=[1, [2, [3, [4, [5, 6]]]]];
// function getLength(arr)
// {
//     let a=arr.flat(Infinity);
//     return a.length;
// }
// console.log(getLength(arr));




//5
// function cutInHalfAndFloor(num)
// {
//     return `cutInHalfAndFloor of ${num} is ${Math.floor(num/2)}`;
// }
// console.log(cutInHalfAndFloor(99));


//6
// function capitalizeWord(str)
// {
//     const arr=str.split(" ");
//     foreach(var x=0;x<arr.length;x++)
//     {
//         arr[x]=arr[x].charAt(0).toUpperCase() + arr[x].slice(1);
       
//     }
//     return arr.join(" ");
    
// }
// console.log(capitalizeWord("hello world this is sai"));


//7
function longestThree(str)
{
    let arr=str.split(" ");
    let sortArr=arr.sort((a,b)=> b.length - a.length);
    const out=[];
    if(arr.length < 3)
    {
        for(let i=0;i<arr.length;i++)
        {
            out.push("#"+arr[i]);
        }
    }
    else{
        out.push("#"+arr[0]);
        out.push("#"+arr[1]);
        out.push("#"+arr[2]);
    }
    console.log(out);
}
longestThree("How the Avocado Became the Fruit of the Global Trade");


//8
// let car =
// {
//     name:"Audi",
//     model:"XC400",
//     color:"white"
// };
// Object.keys(car).forEach(value => console.log(value));


//9
// let array=[];
// function fizzBuzz(start, end) 
// {
//     for(let i=start;i<=end;i++)
//     {
//         if(i%3==0 && i%5==0)
//         {
//              array.push("FIZZBUZZ")
//         }
//         else if(i%5==0)
//         {
//             array.push("BUZZ");
//         }
//         else if(i%3==0)
//         {
//             array.push("FIZZ");
//         }
//         else
//         {
//             array.push(i);
//         }
//     }
//     console.log(array);
// }
 
// fizzBuzz(1, 15);


//10
// function productofNos(...nums)
// {
//     let product=1;   
//     for (let i=0; i<nums.length; i++) 
//         product*=nums[i];
//     console.log(product);
    
// }
// productofNos(1,2,3,4);

//11
// let bookList =  
// [
//     {
//         name: "Javascript Good parts",
//         author:"Douglas Crockford",
//         stock:"10"
//     },
//     {
//         name: "A Smarter Way to Learn JavaScript",
//         author: "Mark Meyers",
//         stock:"12"
//     },
//     {
//         name: "Effective Javascript",
//         author:"David Herman",
//         stock:"0"
//     }
// ]

// let filterarr = bookList.filter((e) => e.stock != 0)
// filterarr.forEach((e)=>console.log(e));

//12
// var Set1 = new Set([3,4,5])
// var Set2 = new Set([6,5,3])

// Set2.forEach(Set1.add , Set1)
// console.log(Set1)

//13
// let str =  '{"Javascript" : "The Good Parts", "Author": "Douglas Crockford"}';
// function findAuthor(str)
// {
// let obj = JSON.parse(str);
// return `The author is ${obj.Author}`;
// }
// console.log(findAuthor(str));

//14
// function distanceTravel(cost)
// {
//     let dist=0;
//     if(cost!=0)
//     {
//     dist++;
//     cost-=3
//     }
//     while(cost!=0)
//     {
//         dist++;
//         cost-=2;
//     }
//     return dist;
// }
// console.log(distanceTravel(0));