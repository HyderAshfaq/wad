var accInfo={
	name:"Haider",
	balance: 0,
	currency:"pk",
	IBAN: "pak001" 
}

init();
function init(){
	document.getElementById("title").innerText=accInfo.name;
	document.getElementById("balance").innerText=accInfo.balance;
	document.getElementById("currency").innerText=accInfo.currency;
	document.getElementById("IBAN").innerText=accInfo.IBAN;
}
function depositAmount(event){
	if(event.key=="Enter")
	{
		var num=parseInt(document.getElementById("deposit").value);
		document.getElementById("deposit").value="";
		document.getElementById("deposit-msg").value="";
		if(isNaN(num))
		{
			document.getElementById("deposit-msg").innerText="Enter Some interger Amount";
		}
		else
		{
			if(num<=0)
			{
				document.getElementById("deposit-msg").innerText="Enter valid interger Amount";	
			}
			else
			{
				document.getElementById("deposit-msg").innerText="";
				accInfo.balance+=num;
				document.getElementById("balance").innerText=accInfo.balance;
				table= document.getElementById("transaction-table");
				table.innerHTML +=
				'<tr>'
			        +'<th align="left" valign="middle" scope="col">'+ new Date()+'</th>'
			        +'<th align="left" valign="middle" scope="col">'+'credit'+'</th>'
			        +'<th align="left" valign="middle" scope="col">'+num+'</th>'
			    +'</tr>';
			}
		}
	}
}
function withDrawAmount(e){
	if(e.key=="Enter")
	{
		var num1=parseInt(document.getElementById("withdraw").value);
		document.getElementById("withdraw").value="";
		if(isNaN(num1))
		{
			document.getElementById("withdraw-msg").innerText="Enter Some interger Amount";
		}
		else
		{
			if(num1>accInfo.balance)
			{
				document.getElementById("withdraw-msg").innerText="Enter valid interger Amount";	
			}
			else
			{
				document.getElementById("withdraw-msg").innerText="";
				accInfo.balance-=num1;
				document.getElementById("balance").innerText=accInfo.balance;
				table= document.getElementById("transaction-table");
				table.innerHTML +=
				'<tr>'
			        +'<th align="left" valign="middle" scope="col">'+ new Date()+'</th>'
			        +'<th align="left" valign="middle" scope="col">'+'credit'+'</th>'
			        +'<th align="left" valign="middle" scope="col">'+num1+'</th>'
			    +'</tr>';
			}
		}
		
	}
}

