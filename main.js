function check()
{
	var x= document.forms["form"]["email"].value;
	var y=document.forms["form"]["pass"].value;
	if(x=="" || y=="" )
	{
		alert("Please Fill The All The Details");
		return false;
	}
	else
	{
		confirm("success");
	}
}