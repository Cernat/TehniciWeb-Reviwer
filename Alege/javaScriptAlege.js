//alert("conectatAlege");

var raspuns=null;


var xhr = new XMLHttpRequest();

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response))
        raspuns=JSON.parse(xhr.response)
    } else {
        console.log('The request failed!');
    }

    console.log('This always runs...');
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();


var myButton=document.getElementById("text");
myButton.addEventListener("click",function(){
    
    
    //par.innerHTML="ceva";

    
    raspuns.forEach(function(elem){
        console.log(elem);
        
        var par = document.createElement("p"); //asta creaza variabila paragraf
        var par2 = document.createElement("p"); //asta creaza variabila paragraf
        
        par.innerHTML=elem.id + " " +elem.name; //aici copiem din dictionar id-ul in variabila
        document.body.appendChild(par); //aici ne ajuta sa afisam pe site
        //par2.innerHTML=elem.name;
        //document.body.appendChild(par2);
		
    });
    
});

var myStop=document.getElementById("stop");
var ok = 1;
myStop.addEventListener("click",function(){  
	ok = 0;
	console.log(ok);
	alert("conectat");
});

var cronos=setInterval(
	function(){
		
			if(ok == 1)
			{
				raspuns.forEach(function(elem){
				console.log(elem);
				
				var par = document.createElement("p"); //asta creaza variabila paragraf
				var par2 = document.createElement("p"); //asta creaza variabila paragraf
				
				par.innerHTML=elem.id + " " +elem.name; //aici copiem din dictionar id-ul in variabila
				document.body.appendChild(par); //aici ne ajuta sa afisam pe site
				//par2.innerHTML=elem.name;
				//document.body.appendChild(par2);
		
			});
			}
			else
			{
				alert("Ai oprit cererea!");
				clearInterval(cronos);
			}
		
	},10000);