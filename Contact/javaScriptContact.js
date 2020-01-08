//alert("conectatContact");

// ---------------> Formular!!!!!!!


var formular=document.getElementById("Formular");
//formular.style.max-height="50%";
//formular.style.max-width="50%";
//formular.style.background="dark-orange";
//formular.style.position="relative";
//formular.style.left="45px";

var creeazaFormular = document.createElement("form");
creeazaFormular.setAttribute("action","");
creeazaFormular.setAttribute("method","post");
formular.appendChild(creeazaFormular);

var titlu = document.createElement('h2');
titlu.innerHTML = "Contacteaza-ne!";
creeazaFormular.appendChild(titlu);

var linie = document.createElement('hr');
creeazaFormular.appendChild(linie);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var numeEmail = document.createElement('label');
numeEmail.innerHTML = "Adresa Email: ";
creeazaFormular.appendChild(numeEmail);

var inputEmail = document.createElement('input');
inputEmail.setAttribute("type","email");
//inputEmail.setAttribute("name","dName");
//inputEmail.id ="myInputEmail";
creeazaFormular.appendChild(inputEmail);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);


var parola = document.createElement('label');
parola.innerHTML = "Password: ";
creeazaFormular.appendChild(parola);

var inputPass = document.createElement('input');
inputPass.setAttribute("type","password");
//inputEmail.setAttribute("name","dName");
creeazaFormular.appendChild(inputPass);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var textObs = document.createElement('label');
textObs.innerHTML = "Observatii: ";
creeazaFormular.appendChild(textObs);

var textObservatii = document.createElement('textarea');
textObservatii.setAttribute("name","dmessage");
creeazaFormular.appendChild(textObservatii);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

//Check Box-ul !!!

var myCheckBox = document.createElement('input');
myCheckBox.type = "checkbox";
myCheckBox.name = "testttt";
myCheckBox.value = "value";
myCheckBox.id = "myCheckBoxID";


var label = document.createElement('label')
label.htmlFor = "myCheckBoxID";
label.appendChild(document.createTextNode('Check me out!'));

creeazaFormular.appendChild(myCheckBox);
creeazaFormular.appendChild(label);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

// Butonul de tip range!!

var myRange = document.createElement('input');
myRange.setAttribute("type","range");
myRange.setAttribute("min","1");
myRange.setAttribute("max","99");
myRange.setAttribute("id","myRangeID");

var label = document.createElement('label')
label.htmlFor = "myRangeID";
label.appendChild(document.createTextNode('Example range input!'));

creeazaFormular.appendChild(label);
creeazaFormular.appendChild(myRange);

myRange.value="1";


var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

// Inputul de tip Select

var vectoriCulori = ["red", "green", "blue"];

var mySelect = document.createElement("select");
mySelect.id = "mySelectID";
//document.body.appendChild(mySelect);
creeazaFormular.appendChild(mySelect);

for (var i = 0; i < vectoriCulori.length; i++) {
    var option1 = document.createElement("option");
	console.log(vectoriCulori[i]);
    //option1.value = vectoriCulori[i];
    option1.text = vectoriCulori[i];
    mySelect.appendChild(option1);
	//mySelect.add(option1);
}


var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

// Butonul de Submit!!

var mySubmit = document.createElement('BUTTON');
mySubmit.innerHTML = "Submit";
mySubmit.setAttribute("class", "mySubmitClass");
mySubmit.setAttribute("type", "submit");
mySubmit.setAttribute("name", "dsubmit");
mySubmit.setAttribute("value", "Submit");
mySubmit.setAttribute("id", "mySubmitId");

creeazaFormular.appendChild(mySubmit);

// Butonul de Reset!!

var myReset = document.createElement('BUTTON');
myReset.innerHTML = "Reset";
myReset.setAttribute("class", "myResetClass");
creeazaFormular.appendChild(myReset);









//-----------------------------Sus a fost creearea de butoane in formular.


// 2)


mySubmit.addEventListener('click',function(e){
	
	e.preventDefault(e);
	//alert("conectat!");
	var email = inputEmail.value;
	var pass = inputPass.value;
	
	console.log(email);
	console.log(pass);
	
	if (ValidateEmail(email) && ValidatePassword(pass)){
	document.getElementById("input").innerHTML = 'Email: '+email+'<br>Password: '+pass;
	
	}
	else{
		
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[0]);
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[1]);
	}
	
});

// Trebuie sa dai check la buton ca sa poti da submit!!

myCheckBox.checked =false;

mySubmit.style.opacity=".5";
mySubmit.disabled=true;
mySubmit.style.cursor="not-allowed";
	
//console.log(check.value);
myCheckBox.addEventListener("click",function (){
	
  if (myCheckBox.checked) {
    //alert("checked");
	mySubmit.style.opacity="";
	mySubmit.disabled=false;
	mySubmit.style.cursor="default";
	
  } else {
   // alert("You didn't check it! Let me check it for you.");
	mySubmit.style.opacity=".5";
	mySubmit.disabled=true;
	mySubmit.style.cursor="not-allowed";
  }
	
});



var rezultat = null;
myReset.addEventListener('click',function(e){
	
	e.preventDefault(e);
	//alert("conectat!");
	/*
	Swal.fire({
	title: 'Are you sure?',
	text: "You won't be able to revert this!",
	icon: 'warning',
	showCancelButton: true,
	confirmButtonColor: '#3085d6',
	cancelButtonColor: '#d33',
	confirmButtonText: 'Yes, delete it!'
	
		}).then((result) => {
			rezultat=result.value;
			//console.log(rezultat);
		if (result.value) {
			rezultat=result.value;
			console.log(rezultat);
			Swal.fire(
		'Deleted!',
		'Your file has been deleted.',
		'success'
					 )
		}
			}) */
	var result = confirm("Sigur vrei sa reseti formularul?");
	if (result==true) {
		
	inputEmail.value="";
	inputPass.value="";
	textObservatii.value="";
	myRange.value="1";
    //var email=document.getElementById("myInputEmail").value="";
	//var pass=document.getElementById("exampleInputPassword1").value="";
	//var range=document.getElementById("formControlRange").value="18";
	//var anul=document.getElementById("exampleFormControlSelect1").value="1";
	
	myCheckBox.checked =false;
	mySubmit.style.opacity=".5";
	mySubmit.disabled=true;
	mySubmit.style.cursor="not-allowed";
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[0]);
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[1]);
	}
		
	
});

function ValidateEmail(mail) 
{
	//console.log(mail);
	//alert("haidiboss");
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    //alert("Ai introdus o adresa de email invalida!")
	
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: ' Ai introdus o adresa de email invalida!',
	  footer: '<a href>Why do I have this issue?</a>'
	})
	
    return (false)
}

function ValidatePassword(pass)
{
	if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(pass))
	{
    return (true)
	}
    //alert("Ai introdus o parola invalida!")
	
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: ' Ai introdus o parola invalida!',
	  footer: '<a href>Why do I have this issue?</a>'
	})
	
    return (false)
	/*
	^	The password string will start this way
(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
(?=.*[0-9])	The string must contain at least 1 numeric character
(?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{8,})	The string must be eight characters or longer
*/
	
}

document.body.addEventListener("keydown", function(event){

	if(event.key === "Enter")
	{
		//alert("conectat boss");
		event.preventDefault();
		document.getElementById("mySubmitId").click();		
	}

});

document.addEventListener('keydown', function(e){
  if(e.key == "Escape")
    window.location.reload(true); 
	
})

//var select = document.querySelector("#my-select");
//var body = document.body;
//select.addEventListener('change', function() {
 // var options = this.options;
  //var selectedOption = options[options.selectedIndex];
  //body.style.background = selectedOption.value;

//});



mySelect.addEventListener('change', function(){
	
	var optionCuloare=this.options;
	var selectedOption = optionCuloare[optionCuloare.selectedIndex];
	document.body.style.background = selectedOption.value;
	
	
});


myRange.addEventListener("change", function(){
	
	console.log(myRange.value);
	
});

//concat si culori random

colors =[];
function schimba(k){
	
	for(i=0;i<k;i++)
	{
		var r=Math.floor(Math.random()*255);
		var g=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		var concat="rgb("+r+","+g+","+b+")";
	//console.log(concat);
		colors.push(concat);
	//console.log(colors);
	}
}


var culoareRandom = document.createElement('BUTTON');
culoareRandom.innerHTML = "Culoare Random";
culoareRandom.setAttribute("id", "myCuloareRandom");
document.getElementById("interiorID").appendChild(culoareRandom);

//vectoriCulori si cerinta gandita de mine !!

culoareRandom.addEventListener("click", function(){
	
	//alert("bos");
		var r=Math.floor(Math.random()*255);
		var g=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		var concat="rgb("+r+","+g+","+b+")";
		console.log(concat);
		//colors.push(concat);
		//console.log(colors);
		document.body.style.background = concat;
});

var adaugaCuloare = document.createElement('BUTTON');
adaugaCuloare.innerHTML = "Adauga Culoare";
adaugaCuloare.setAttribute("id", "myAdaugaCuloare");
document.getElementById("interiorID").appendChild(adaugaCuloare);

adaugaCuloare.addEventListener("click", function(){
	
	//vectoriCulori.concat(colors);
	console.log(colors.length);
	
	for(i=1;i<=parseInt(colors.length)*2+2;i++){
		
		var option3= document.createElement("option");
		option3.text=colors.value;
		console.log(option3.value);
		mySelect.add(option3)
		colors.pop();
	}
	
	
	
	for(i=1;i<=parseInt(colors.length)*2+2;i++)
	{
		console.log(i);
		//alert("intrat");
		colors.pop();
	}
	
	console.log(colors);
	
	console.log("Adaugat cu succes!");
	
});
/*
var x=document.getElementById("exampleFormControlSelect1");
var option3= document.createElement("option");
option3.text="3";
x.add(option3);

//SweetAlert2

/*
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
*/




