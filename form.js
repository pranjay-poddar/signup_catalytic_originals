function checkfun(form2)
{
        allLetter(form2.name);
        strleng(form2.name);
        ValidateEmail(form2.email);
        var x = checkPassword(form2);
        
        
}

function calling()
{
    if (window.confirm("Would you like to go to Yahoo !!")) {
        window.location.href="http://www.yahoo.com";
      }
}
//name alphabet check-------------------------------------------------
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only without spaces for USERNAME!');
      return false;
      }
      }

//----name length check-------------------------------------------------------------------------------
      function strleng(inputtxt)
{ 
var field = inputtxt.value; 
var mnlen = 5;


if(field.length<mnlen)
{ 
alert("Username must be atleast 5 characters long!");
return false;
}
else
{ 
return true;
}
}
//---email check-----------------------------------------------------------------------------------------
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}
//----------password check----------------------------------------------------------//

        function checkPassword() {
            var password = document.getElementById("password1").value;
            var confirmPassword = document.getElementById("password2").value;
            
            if (password != confirmPassword || (password=='' && confirmPassword=="")  ) {
                alert("Passwords do not match!Please try again...");
                return false;
            }
            
            else
            {
                alert('Thank You! Information Submitted Successfully.Press ok to view official page.')
                    window.open('catalyticoriginals-master/index.html');
            }
            return true;
        }

