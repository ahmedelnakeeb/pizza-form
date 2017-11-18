function validate()
{
	var name = document.forms["form"]["name"].value;
	var address = document.forms["form"]["address"].value;
	var credit = document.forms["form"]["credit"].value;
	var phone = document.forms["form"]["phone"].value;

	if(name === "" || address === "" || credit === "" || phone === "")
	{
		alert('Please fill your data');
		return;
	}

	//check name
	// check for underscore and digits in name
	if(name.search("_") != -1 || name.search(/[0-9]/) != -1)
	{
		alert('invalid name');
		return;
	}

	//check for optional white spaces but not at the end
	if(/\w\s+/.test(name))
	{
	}
	
	if(name.endsWith(" "))
	{
		alert('Invalid name');
		return;
	}

	//check for uppercase first letter in name
	var name = name.replace(/\s{2,}/g,' ').trim();
	var name = name.split(" ");
	if(name.length < 3)
	{
		alert("Please enter first, middle_initial, and last name");
		return;
	}

	if(!(/^[A-Z][a-z]/.test(name[0]) && /^[A-Z][a-z]/.test(name[2])))

	{
		alert('invalid first or last name');
		return;
	}
	
	for(var i = 0; i < name.length; i++)
	{
		if(name[i] !== "")
		{
			if(!(/^[A-Z]/.test(name[i])))
			{
				alert('The name must start with UPPERCASE letter');
				break;
			}	
		}
	}
	
	

	//check address
	var add = address.split(' ');

	if(add.length<2) alert('invalid address');

	if(add[1] == "")
	{
		alert('invalid address');
		return;
	}
	
	if(!(/^[0-9]+[0-9]*/.test(address)))
	{
		alert("please write street number");
		return;
	}

	
	for(var i = 1; i < add.length; i++)
	{
		if(add[i] !== "")
		{
			if(add[i].search("_") != -1 || add[i].search(/[0-9]/) != -1)
			{
				alert('address can not contains uderscore or digits');
				break;
			}
			if(!(/^[A-Z][a-z]/.test(add[i])))
			{
				alert('street name must start with UPPERCASE letetr followed by lowercase letter'+add[i]);
				break;
			}
		}
	}
	
	//check credit card N.

	if(!(/^\d{4}-?\d{4}-?\d{4}-?\d{4}$|^\d{12}$/.test(credit)))
	{
		alert('invalide credit number');
		return;
	}	


	//check phone N.
	if(!(/^\d{3}-?\d{3}-?\d{4}$/.test(phone)))
	{
		alert('invalide phone number');
		return;
	}	

}

