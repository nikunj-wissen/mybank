function calculateEMI()
{
	var amount = document.getElementById("amount").value
	var roi = parseInt(document.getElementById("roi").innerText)
	var tenure = document.getElementById("tenure").value
	
	console.log("amount: " + amount + "  && roi: " + roi + " && tenure: " + tenure)
	
	roi /= 1200;
	
	var emi = amount * roi * Math.pow(1 + roi, tenure) / ((Math.pow(1 + roi, tenure)) - 1);		 // E = P x r x ( 1 + r )n / ( ( 1 + r )n - 1 )
	
	console.log("EMI: " + emi);
	emi = emi.toFixed(2);
	
	document.getElementById("finalValue").innerText = "EMI: " + emi + " Rs.";
	//alert("EMI: " + emi + " Rs.");
}

function setLoanType(loanType)
{
	console.log("setLoanType() -> " + loanType + "->" + typeof(loanType));
	if(loanType == "Home_Loan")
	{
		document.getElementById("roi").innerText = 7
		document.getElementById("tenure").max = 25
	}
	else if(loanType == "Car_Loan")
	{
		document.getElementById("roi").innerText = 9
		document.getElementById("tenure").max = 7
	}
	else if(loanType == "Personal_Loan")
	{
		document.getElementById("roi").innerText = 12
		document.getElementById("tenure").max = 5
	}
}