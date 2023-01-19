var password = "pass1";
function passcheck(){
  if(document.getElementById('pass1').value != password){
    alert ('Wrong Password, Try Again. Confused? Check Your Email If You Have No Email That Means Your Sadly Not Allowed Here :( ');
    return false;
  }
    if(document.getElementById('pass1').value == password){
    alert ('Correct password. Click OK To Enter Webpage');
  }
}
