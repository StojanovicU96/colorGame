var targetColor = generateTargetColor(); 
var mode = "hard";

generateColors(mode);

//set game to hard mode
$("#hardBtn").on("click",function(){
    targetColor = generateTargetColor(); 
    $("#easyBtn").removeClass("selected");
    if(mode==="easy"){
        mode = "hard";
        $(this).addClass("selected");
    }
    $(".second-row").show();
    generateColors(mode);
});

//set game to easy mode
$("#easyBtn").on("click",function(){
    targetColor = generateTargetColor(); 
    $("#hardBtn").removeClass("selected");
    if(mode==="hard"){
        mode = "easy";
        $(this).addClass("selected");
    }
    $(".second-row").hide();
    generateColors(mode);
});


//start new game
$("#newGameBtn").on("click",function(){
    targetColor = generateTargetColor();
    generateColors(mode);
});

//remove square if color don't match to target color,
//otherwise paint all squares with target color 
$("td").on("click", function() {
    if($(this).css("background-color") === targetColor){
        $("td").css("background-color",targetColor);
        $("#rgb-title-section").css("background-color",targetColor);
    }else{
        $(this).css("background-color","rgb(88,88,88)");
    }
});

//generating color for each square
function generateColors(mode) {
    var randNum = 0;
    var numOfColors = 0;
    var squares = document.querySelectorAll("td");

    $("#rgb-title-section").css("background-color","rgb(30, 144, 255)");

    if(mode === "easy"){
        randNum = Math.floor(Math.random()*2);
        numOfColors = 3;
    }else{
        randNum = Math.floor(Math.random()*5);
        numOfColors = 6;
    }

    for(var i = 0; i < numOfColors ; i++){
        if(i === randNum){
            squares[i].style.backgroundColor = targetColor;
        }else{
            squares[i].style.backgroundColor = generateColor();
        }
    }
}

//generate single color
function generateColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256); 
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}


//generate target color
function generateTargetColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256); 
    var b = Math.floor(Math.random()*256);

    $("#R").text(r);
    $("#G").text(g);
    $("#B").text(b);

    return "rgb("+r+", "+g+", "+b+")";
}
