//var name="Riddhi";
//let name="Riddhi";
//let age=23;
//let yearOfBirth=1997-age;
//alert("Hello, my name is "+name + "i am"+age +"years old");
//document.getElementById("example").innerHTML="Hello, my name is "+name + "i am"+age +"years old");


function greetUser(){
	let name="Riddhi";
	let age=23;
//let yearOfBirth=1997-age;
//alert("Hello, my name is "+name + "i am"+age +"years old");


document.getElementById("example").innerHTML="Hello, my name is "+name + "i am"+age +"years old";	
}

document.getElementById("btn").onsubmit=function(e){
	let name=document.getElementById("age").value;
let age=document.getElementById("name").value;;
let yearOfBirth=1997-age;
if(age>0 && age<120)
{
	document.getElementById("example").innerHTML="Hello, my name is "+name + "i am"+age +"years old";	
}
else{
	document.getElementById("example").innerHTML="Error";	
}
document.getElementById("example").innerHTML="Hello, my name is "+name + "i am"+age +"years old";	
document.getElementById("example").style.backgroundColor="gray";
document.getElementById("example").style.Color="White";
};


greetUser();