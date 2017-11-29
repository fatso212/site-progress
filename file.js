//var f = evt.target.files[0];
function print(){
	var reader = new FileReader()
	reader.onload = function(event){
		var output = event.target.result
		document.getElementById("file").innerHTML = output
	}
	reader.readAsText(document.getElementById("fileinput")[0]);
}

document.getElementById("fileinput").addEventListener("click", print)

/*
	var reader = new FileReader();
	var reader = new FileReader();
	reader.onload = function (e) {  
		var output=e.target.result;
		document.getElementById('main').innerHTML= output;
	};//end onload()
				reader.readAsText(that.files[0]);

*/