let arr=[1, [2, [3, [4, [5, 6]]]]];
function getLength(arr)
{
    let a=arr.flat(Infinity);
    return `The length of array is ${a.length}`;
}
console.log(getLength(arr));