let outputScreen = document.getElementById("output-screen");

function display(num){
    var Calculate = document.getElementById("output-screen")
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid input")
    }
}

function Clear(){
    var display = document.getElementById("output-screen");
    outputScreen.value = "";
}

function del(){
    var display = document.getElementById("output-screen");
    outputScreen.value = outputScreen.value.slice(0, -1);
}