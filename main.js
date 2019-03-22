
function showDiv(){
 

	var selectBox = document.getElementById('convert');
	var userInput = selectBox.options[selectBox.selectedIndex].value;


	
	document.getElementById('pInput').addEventListener('input', function(e){
	let php = e.target.value;
	
	if (userInput == 1){
	
		document.getElementById('phpOutput').innerHTML = php*52.9;
	
	}else if (userInput == 2) {
		
		document.getElementById('phpOutput').innerHTML = php*0.48;
	}else if(userInput == 3){
		document.getElementById('phpOutput').innerHTML = php*139.23;

	}else if (userInput == 4){
		document.getElementById('phpOutput').innerHTML = php*7.85;
	}else if (userInput == 0){
			
			document.getElementById('phpOutput').innerHTML = php * 0;

		}
		});
	
	return false
}




/*function showDiv(){


	var selectBox = document.getElementById('convert');
	var userInput = selectBox.options[selectBox.selectedIndex].value;
	

	if (userInput == 1){

		document.getElementById('pInput').addEventListener('input', function(e){

			let php = e.target.value;
		document.getElementById('phpOutput').innerHTML = php*55;


		});
	
	}else if (userInput == 2) {
		document.getElementById('pInput').addEventListener('input', function(e){

			let php = e.target.value;

		document.getElementById('phpOutput').innerHTML = php*2;
	});
	
}
	return false




}*/