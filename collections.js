let data = {
	headers:{},
	content:{},
	footers:{}
}
let addToDataObjects = function(obj, ...item){
	item.forEach(function(piece){
		obj[piece] = piece
	})
}


addToDataObjects(data.headers, "About", "Contact", "Portfolio");
addToDataObjects(data.headers, "business", "planning", "events");
data.headers.About.dropdown = "dropdown"

console.log(data.headers.About)

