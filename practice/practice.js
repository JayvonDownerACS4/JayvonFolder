var googleURL = "";

$.ajax(
    {
        url:googleURL,
        success:function(data)
        {
            //console.log(data);
            $("body").append("<h1> This " + foodName + " has " + calories + " kcal </h1>")
        }
    }
);