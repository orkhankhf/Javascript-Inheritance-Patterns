var body = document.querySelector("body");

Element.prototype.createElement=function(element,attr,attrName,inner){
	var element = document.createElement(element);
	element.setAttribute(attr,attrName);
	element.innerHTML = inner;
	this.appendChild(element);
}

body.createElement("p","class","main","Salam");