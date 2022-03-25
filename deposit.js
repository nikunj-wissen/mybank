function calculateDeposit()
{
	var amount = document.getElementById("amount").value
	var roi = parseInt(document.getElementById("roi").innerText)
	var tenure = document.getElementById("tenure").value
	
	console.log("amount: " + amount + "  && roi: " + roi + " && tenure: " + tenure)
	
	roi /= 100;
	
	var finalVal = amount * Math.pow(1 + roi, tenure);
	
	console.log("Maturity Amount: " + finalVal);
	
	finalVal = finalVal.toFixed(2);
	
	document.getElementById("finalValue").innerText = "Maturity Amount: " + finalVal + " Rs.";
	document.getElementById("interest").innerText = "Interest Earned: " + (finalVal-amount) + " Rs.";
	//alert("finalVal: " + finalVal + " Rs.");
}

function setROI(rate)
{
	console.log("setrate() -> " + rate + "->" + typeof(rate));
	if(rate <= 2)
	{
		document.getElementById("roi").innerText = 5
	}
	else if(rate <= 5)
	{
		document.getElementById("roi").innerText = 6
	}
	else if(rate <= 10)
	{
		document.getElementById("roi").innerText = 7
	}
}