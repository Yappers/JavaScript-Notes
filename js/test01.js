var num = addNum(5,10);

document.getElementById("tigger").innerHTML = num;

//A simple function to take in two variables and output a sum
function addNum(num1,num2){
    return num1+num2;
}


function submit(){
//    var input = document.getElementsByClassName("input-field");
    var input1 = document.getElementById("input-field1").value;
    var input2 = document.getElementById("input-field2").value;

    document.getElementById("show").innerHTML = addNum(Number(input1),Number(input2));
}