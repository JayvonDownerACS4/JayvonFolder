var items = [
    "Air Jordan 11 Concords",
    "Flyknits",
    "Space Jams",
    "Yeezy's",
    "Stan Smith",
    "OVO",
];
function binary_Search(array, value)
{
  var firstIndex  = 0,
  lastIndex   = items.length - 1,
  middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(items[middleIndex] != value && firstIndex < lastIndex)
  {
    if (value < items[middleIndex])
    {
      lastIndex = middleIndex - 1;
    } 
    else if (value > items[middleIndex])
    {
      firstIndex = middleIndex + 1;
    }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
 return (items[middleIndex] != value) ? -1 : middleIndex;
}


console.log(binary_Search(items, items.indexOf("Flyknits")));   
