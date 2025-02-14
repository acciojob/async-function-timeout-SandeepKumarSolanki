//your JS code here. If required.
let input1 = document.getElementById('text');
let input2 = document.getElementById('delay');
let btn = document.getElementById('btn');

let output = document.getElementById('output');

let text1 = input1.innerText;
let text2 = input2.innerText.val;


new Promise((resolve , reject) =>{
		if(text1.length == 0){
			output.innerText = ``;
		}else{
			setTimeout(() => {
				btn.addEventListener("click" , ()=>{
					output.innerText = `Test - 1`
				})
			},text2)
		}
})