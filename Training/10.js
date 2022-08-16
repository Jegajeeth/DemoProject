function productofNos(...nums)
{
    let product=1;   
    for (let i=0; i<nums.length; i++) 
        product*=nums[i];
    return `Product of numbers  = ${product}`;
    
}
console.log(productofNos(1,2,3,4));
