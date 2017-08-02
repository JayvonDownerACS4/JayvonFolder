var countryURL = "https://restcountries.eu/rest/v2"; 
var randomURL = "https://randomuser.me/api/"  
var randomNum = Math.round(Math.random()*250);

//randomUser ajax
$.ajax(
    {
        url:randomURL,
        success:function(data)
        {
            var firstName =  data.results[0].name.first;
            var lastName = data.results[0].name.last;
            var name = firstName + lastName;
            var nationality = data.results[0].nat;
            var picURL = data.results[0].picture.medium;
            console.log(data.results[0])
            
            //country ajax
            $.ajax(
            {
                url:countryURL,
                success:function(data)
                {
                    console.log(data[randomNum]);
                    var countryName = data[randomNum].name
                    var abbreviation = data[randomNum].alpha2Code
                    $("body").append("<h3>" + abbreviation + ",  " + countryName + "</h3>");  
                    $("body").append("<h2> Name: " + name  + "</br>" + " nationality: " + nationality +"</h2>");
                }
            }
            )
        }
    }
)



