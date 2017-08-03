var randomURL = "https://randomuser.me/api/";
$.ajax(
    {
        url:randomURL,
        success:function(data)
        {
            var userFirstName = data.results[0].name.first;
            var userLastName = data.results[0].name.last;
            var userState = data.results[0].location.state;
            var userPic = data.results[0].picture.medium;
            
            console.log(userPic)
            $("body").append("<h1> Hi I'm " + userFirstName + " " + userLastName + ", nice to meet you, I live in " + userState + " here's my photo </h1>")
        }
    }
) we