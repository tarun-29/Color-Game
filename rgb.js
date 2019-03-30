var colors = generatRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

colorDisplay.textContent = pickedcolor;

for(i=0; i<squares.length; i++)
{
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        console.log(clickedColor, pickedcolor);
        if(clickedColor === pickedcolor)
        {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play again??"
        
        }
        else
        {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        
    })
}

function changeColors(color){
    for(var i =0; i<colors.length; i++ )
    {
        squares[i].style.background = color;    }
}

function  pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generatRandomColors(num){
    //make an array
    var arr = []
    //add num random color to array
    for(var i=0; i<num; i++)
    {
        //get random color and push into an arr array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 255
   var r = Math.floor(Math.random()*256)
    //pick a green from 255
   var g = Math.floor(Math.random()*256)
    //pick a blue from 255
   var b =  Math.floor(Math.random()*256)
   "rgb(r, g, b)"
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener ("click", function(){
    //generatr random colorss
    colors = generatRandomColors(numSquares);
    //pick a new random color from array
    pickedcolor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedcolor;
    this.textContent = "New Game";
    messageDisplay.textContent = "";
    //change color of square
    for(i=0; i<squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generatRandomColors(numSquares)
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i =0; i<squares.length; i++)
    {
        if(colors[i]){
           squares[i].style.background = colors[i]; 
        }
        else{
            squares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generatRandomColors(numSquares)
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    for(var i =0; i<squares.length; i++)
    {
  
           squares[i].style.background = colors[i]; 
        
       
            squares[i].style.display = "block";
        
    } 


});