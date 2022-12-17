var input=document.createElement("INPUT");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Enter a number:");
	input.setAttribute("id","nithi");
	input.classList.add("style");
	document.body.appendChild(input);
	document.write('<br/>','<br/>.');
	

	document.body.style.textAlign="center";
	document.body.style.backgroundColor="yellow";

	
	button=document.createElement("button");
	button.setAttribute("onclick","fibo()");
	button.innerHTML="Click";
	button.classList.add("box");
    document.body.appendChild(button)
	  
	
	
	m=document.createElement("div")
	m.style.marginLeft="30%";
	m.style.padding="30px";
	document.body.appendChild(m) 
	
	
	function fibo(){
		var num=document.getElementById("nithi").value;
		innerHTML=""
        var a=0;
        var b=1;

for(i=0;i<=num;i++)
{
	m.innerHTML+=a+"<br>";
	c=a;
	a=a+b;
	b=c;
}
}