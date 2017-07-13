function rand(number) 
{
    var randomDecNumber = Math.random()*number ;
    //console.log(randomDecNumber);
    var randomIntNumber = Math.round(randomDecNumber);
    return randomIntNumber;
}
console.log(rand(3));