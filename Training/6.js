function capitalizeWord(str)
{
    const arr=str.split(" ");
    for(var x=0;x<arr.length;x++)
    {
        arr[x]=arr[x].charAt(0).toUpperCase() + arr[x].slice(1);
       
    }
    return arr.join(" ");
    
}
console.log(capitalizeWord("hello world this is sai"));