var yourID = "d6384b1b";
var yourKey = "4210e343a6e498ba57c6dd891115e531";
var foodURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + yourID + "&appKey=" + yourKey;

//how to make an ajax function
$.ajax(
    {
        url:foodURL,
        success:function(data)
        {
            //console.log(data);
            var food = data.hits[16];
            var foodName = food.fields.item_name;
            var calories = food.fields.nf_calories

            $("body").append("<h1> This " + foodName + " has " + calories + " kcal </h1>")
        }
    }
);