# EstruturasDeDados
Some Data Structs implementations in Javascript for browsers or node.js

# Data Structs implementated
- List
- Stack
- Binary Search Tree
- Queue
- Map

# Instalation

There are 2 ways for install EstruturasDeDados:

	- In browsers
	- In Node.js

If you need in browsers:
	
	- Download and copy the file "src/estruturas.js" to your path folder
	- Then put in your HTML file <script src='path/to/estruturas.js'></script>
	
	
If you need in Node:

	- $ npm install estruturasdedados
	- var ESTRUTURAS = require('estruturasdedados')

Then let the magic begin

# Exemples

List:

```javascript
//Here you create a instance of List
var lista = new ESTRUTURAS.List();

//If you want to insert a capacity, you can do that
var lista = new ESTRUTURAS.List(10);

//Here you just add a item in list
lista.addItem({'foo': "bar"});

//Or if you want, you can pass the index that you will input with the method "setItem"
lista.setItem(1,{'test' => 2});

//You can get some itens
var obj = lista.getItem(0);

//If you want add an array with some objects
lista.addRange([{"foo": "bar"},{"teste": 1}]);

//You can insert an item at the specified index like that
lista.insert(0,{"foo": 2});

//Then, if you want clear the List
lista.clear();

//If you need search an item
var index = lista.find({"foo": "bar"});

//Checking if item exists
var flag = lista.exists({"foo": "bar"});

//You can execute a function in all elements
lista.forEach(function(item){
	console.log(item);
});

//Then you can remove one item at specified index
lista.removeAt(0);

//Or remove a range
lista.removeRange(1,3);

//You also can get a subList with method
var mySubList = lista.getRange(1,3);
```

Binary Search Tree:

```javascript
//Here you create a instance of Binary Search Tree
var tree = new ESTRUTURAS.ArvoreBinariaBusca();

//Creating one node of your Binary Search Tree
var no = ESTRUTURAS.ArvoreBinariaBusca.newNo();

//Our node have home method, but you only need "setValue" and "getValue"
no.setValue(10);
var value = no.getValue();

//If you want put your no into the tree you need this
tree.addNo(no);

//Then you can search for some value in your tree like that. It may return one "No" object, if the value wasn't in tree, it will return false
var noS = tree.seach(10);

```

Stack(FIFO strategy) and Queue(LIFO strategy):

```javascript
//First you should create an instance of your Struct. We will use Queue in other exemples
var struct = new ESTRUTURAS.Pilha();  //for Stack
var struct = new ESTRUTURAS.Fila();    //for Queue

//Then, you may add itens
struct.addItem({"foo": "bar"});

//You can get some objects following the strategy of the struct
var obj = struct.getItem();

//You also can clear you struct
struct.clear();

//Or check if is empty
struct.empty();

//Or check the size 
struct.size();

```

Map:

```javascript
//Creating an instance of your Map
var map = new ESTRUTURAS.Map();

//Adding an item on map
map.addItem("foo",{"barr": 10});

//You can remove an item with a key
map.removeItem("foo");

//Or get an item
var item = map.getItem("foo");

//Then you can clear
map.clear();

```

# Magicians

[RZorzal](https://github.com/rzorzal)

