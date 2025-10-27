//your JS code here. If required.

let output = document.getElementById("output");

function pro() {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			output.textContent = "Hello, world!";
			resolve("Done");
		},1000)
	})
}
pro();