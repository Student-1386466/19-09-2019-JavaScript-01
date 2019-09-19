function take1(){
  var num01 = getElementById("first").value//4 //prompt ("Write first number from 1-9")
}

function take2(){
  var num02 = getElementById("second").value //prompt ("Write second number from 1-9")
}



function Maths()
{
   //document.write("Please Enter two numbers and then the operator you want to perform on them")



   operator = prompt ("Enter the operation you want to perform")

 if (operator == "+"){
   opt1 = "You selected addition"
   var sum = num01 + num02
   document.getElementById("Maths").valve = sum
 }
 else if (operator == "-") {
   opt2="You selected Subtraction"
   document.getElementById("Maths").innerHTML = num01-num02
 }
 else if (operator == "*") {
   opt3 = "You selected Multiplication"
   document.getElemnetById("Maths").innerHTML = num01*num02
 }
  else if (operator =="/") {
    opt4 = "You selected division"
    document.getElementById("Maths").innerHTML = num01/num02
  }

}
