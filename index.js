let headerarray = [],
	program = {
		functions: {},
		styles: {},
		events: {},
		elements: {}
	}

program.functions.addFunction = function(name, func){
	program.functions[name] = func
}

program.functions.addFunction("addStyle", function(name, style){program.styles[name] = style})
program.functions.addFunction("addToObject", function(obj, name, addition){obj[name] = addition})
program.functions.addFunction("addEvent", function(name, event){program.events[name] = event})
program.functions.addFunction("log", function(){ console.log(program.functions, program.styles, program.events, program.elements)})


program.functions.addFunction("addElement", function(name, el, text, ...stylesheet ){
	let myStyles = Object.assign(...stylesheet);
	var el = document.createElement(el)


		for(var styleline in myStyles){
			el.style[styleline] = myStyles[styleline]
			//this adds duplicates because it is part of a loop
			program.functions.addStyle(name + "style", myStyles)
		}

		if(Array.isArray(text)){
			text.forEach(function(item){
				el.appendChild(item)
			})
		} else { 
			el.innerHTML = text
		}


	program.elements[name] = {}
	program.elements[name].string = el
	program.elements[name].events = {}

})


program.functions.addStyle("default", {width: "100px", height: "100px", background: "blue"})
program.functions.addStyle("colors", {beatifulBlue: "#b0f0f2"})
program.functions.addToObject(program.styles["colors"], "darkerBlue", "#018387")
program.functions.addStyle("defaultFont", {fontSize: "1.4em", color: program.styles.colors.darkerBlue,
	textAlign: "center", fontFamily: "Arial"})
program.functions.addStyle("defaultBorder", {borderRadius: "10px"})
program.functions.addStyle("relativeSize", {background: program.styles.colors.beatifulBlue })
program.functions.addStyle("defaultSpace", {padding: "1%", margin:"1.2em", })
program.functions.addStyle("defaultDisplay", {display: "inline-block"})

function pushHeaders(){
	for(var item in data.headers){
		program.functions.addElement(item, "div", item, 
		program.styles.defaultDisplay, program.styles.defaultSpace)
		//document.body.appendChild(program.elements[item])
		headerarray.push(program.elements[item].string)
	}
}

pushHeaders()
program.functions.addElement("header", "div", headerarray,
program.styles.defaultFont,program.styles.defaultSpace,
program.styles.defaultBorder)
document.body.appendChild(program.elements.header.string)

program.elements.header.events.click = []
program.elements.header.events.click.push(function(){program.elements.header.string.style.backgroundColor = "blue"})
program.elements.header.string.addEventListener("click", function(){
	program.elements.header.events["click"][0]()
})



//let firstWebsite = new Website()
