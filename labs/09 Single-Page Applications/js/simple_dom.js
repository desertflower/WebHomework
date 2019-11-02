//console.log('page loaded');

console.log(document);

//document.getElementById('save').onclick = save;
//function
document.querySelector('#userForm input[type="email"]').onkeyup = function() {
    console.log('updating email');
    var email = document.querySelector('#userForm input[type="email"]').value;
document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	console.log('updating name');
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	console.log('updating pass word');
	var name = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary #p1').innerHTML = name;
};

//inline-function
/*document.querySelector('#userForm input[type="email"]').onclick(inline_func);
var inline_func = function() {
    console.log('updating email');
    var email = document.querySelector('#userForm input[type="email"]').value;
document.querySelector('#summary p').innerHTML = email;
};*/

//anonymous-function
/*document.querySelector('#userForm input[type="email"]').onclick(function() {
	console.log('updating email');

	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
});*/


/*function save() {
  console.log('save');
  // get a DOM object representing a form field.
  var name = document.querySelector('#userForm input[type="text"]');
  console.log(name);
  document.querySelector('#summary h1').innerHTML = name.value;
  var data = document.querySelectorAll('#userForm input');
  console.log(data);
  var paragraphs = document.querySelectorAll('#summary p');
  console.log('found ' + paragraphs.length + ' p tags');
	var passWord = document.querySelector('#userForm input[type="password"]');
  //paragraphs[1].innerHTML = 'Hello World!';
	paragraphs[1].innerHTML = passWord.value;
	var email = document.querySelector('#userForm input[type="email"]');
	paragraphs[0].innerHTML = email.value;
}*/