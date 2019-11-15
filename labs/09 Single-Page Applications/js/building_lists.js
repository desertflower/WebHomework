
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

//var list = document.createElement('ol');
//var list = document.createElement('ul');
var table = document.createElement('table');

var header = table.createTHead();
var row = header.insertRow();
var cell1 = row.insertCell();
cell1.innerHTML = "<b>Book title</b>";

var cell2 = row.insertCell();
cell2.innerHTML = "<b>Year</b>";

for (var i=0; i < books.length; i++) {
	console.log(books[i].title + " "+ books[i].year);

	/*var item = document.createElement('li');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);*/

	var lrow = table.insertRow();
	var lcell1 = lrow.insertCell();
	var lcell2 = lrow.insertCell();

	lcell1.innerHTML = books[i].title;
	lcell2.innerHTML = books[i].year;

	lrow.onclick = function () {
		var cell = this.querySelector('td');
		var name = cell.innerHTML;
		document.getElementById("title").innerHTML = name;
	};


}
//document.body.appendChild(list);
document.body.appendChild(table);
