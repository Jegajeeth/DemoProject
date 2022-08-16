function colorofVeg(veg)
{
    let vegetables = 
    {
        Carrot:"Orange",
        Tomato:"Red",
        Cucumber:"Green",
        Cabbage:"White",
        Potato:"Brown"
    };
    return `Color of ${veg} is ${vegetables[veg]}`;
}
console.log(colorofVeg("Carrot"));