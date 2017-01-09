document.getElementById("demo").innerHTML = Date();  //part1

document.getElementById("date").value=Date();	    //part2

function SetDate()                                   //part3
{
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;
document.getElementById('myDate').value = today;
}

document.getElementById('myDate').value = today;       //part3
var today = year + "-" + month + "-" + day;
function SetDate(){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
}

var date = new Date();                                  //part3
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
var today = year + "-" + month + "-" + day;
document.getElementById('theDate').value = today;


$(document).ready(function(){							//part4
	$("#division").click(function(){
		var content=$(this).html();
		$("#result").text(content);
	});
});

$(document).ready(function(){						//part5
	document.write("Hello World");
});

document.write("hello world");                         //no part

function sayHello() {									//part6
alert("Hello World")
}

function popup() {									//part7
alert("Hello World")
}

var two = 2                                            //no part
var ten = 10
var linebreak = "<br />"

document.write("two plus ten = ")
var result = two + ten
document.write(result)
document.write(linebreak)

document.write("ten * ten = ")
result = ten * ten
document.write(result)
document.write(linebreak)

document.write("ten / two = ")
result = ten / two
document.write(result)

var linebreak = "<br />"									//no part
var my_var = "Hello World!"

document.write(my_var)
document.write(linebreak)

my_var = "I am learning JavaScript!"
document.write(my_var)
document.write(linebreak)

my_var = "Script is Finishing up..."
document.write(my_var)

var a = 33;														// part8
var b = 10;
var c = "Test";
var linebreak = "<br />";
document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);
document.write("a - b = ");								
result = a - b;
document.write(result);
document.write(linebreak);
document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);
document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);
document.write("a + b + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);
a = a++;
document.write("a++ = ");
result = a++;
document.write(result);
document.write(linebreak);
b = b--;
document.write("b-- = ");
result = b--;
document.write(result);
document.write(linebreak);


var a = 10;														// part9
var b = 20;
var linebreak = "<br />";
document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);
document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);
document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);
document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);
document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);
document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);