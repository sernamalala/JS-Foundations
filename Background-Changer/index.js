var colours = ["blue","green","pink","purple","red","yellow","green","orange","black"];



    var button = document.getElementById("btn");
    button.addEventListener("click",function(){
        var randomNumber = Math.random()*colours.length;
        randomNumber = Math.floor(randomNumber);
        console.log(randomNumber);

        var myColours= colours[randomNumber];
        document.body.style.backgroundColor = myColours;
        document.querySelector("span").innerHTML = myColours

        
    })
   
    