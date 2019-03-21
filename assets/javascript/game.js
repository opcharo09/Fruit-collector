
var randomresult;
var lost = 0;
var win = 0;
var previous = 0;

$(document).ready(function() {
    
})

var resetandstart = function (){
   $ (".fruit.").empty();

   
}
// random number between 19-120
randomresult = Math.floor(Math.random() *101 ) + 19;
console.log(randomresult)
$("#result").html("random results: " + randomresult);

for( var i =0; i <4; i++){
  //crystal numbers bettwen 1-12
    var random = Math.floor(Math.random() *12) + 1;
        
   
    var fruit = $("<div>");
        fruit.attr({
            "class": "fruit"
             
        });

     

        $(".fruit").append(fruit);

        $("#previous").html("score:", + previous)
    }

 resetandstart()


$(document).on("click", "fruit", function () {
    

    var number = parseInt($(this).attr("data-random"));


previous += number;

$("#previous").html("score:", previous);

console.log(previous);

if(previous > randomresult) {
    lost--;
    $("#lost").html("sorry you lose: ",lost);

    previous = 0;
    

    resetandstart();
}

 elseif (previous === randomresult) 
    win++;
    $("#win").html("you won:", win);

    previous = 0;
    $("#previous").html(previous)

    resetandstart();
}

);