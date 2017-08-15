function Button() 
{      
    if(document.getElementById("textOne").value == "" &&
    document.getElementById("textTwo").value == "" &&
    document.getElementById("textThree").value == "")
    {
            return false;
    }

    // the search bar thing one
    var node = document.createElement("p");
    var textnode = document.createTextNode(document.getElementById("textOne").value);
    node.appendChild(textnode);
    document.getElementById("idOne").appendChild(node);
    document.getElementById("textOne").value = "";

    // the search bar thing two
    var node = document.createElement("p");
    var textnode = document.createTextNode(document.getElementById("textTwo").value);
    node.appendChild(textnode);
    document.getElementById("idTwo").appendChild(node);
    document.getElementById("textTwo").value = "";   

    // the search bar thing three  
    var node = document.createElement("p");
    var textnode = document.createTextNode(document.getElementById("textThree").value);
    node.appendChild(textnode);
    document.getElementById("idThree").appendChild(node);
    document.getElementById("textThree").value = "";
}