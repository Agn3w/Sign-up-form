const form = document.getElementById("form");
const password = document.getElementById("pword");
const check = document.getElementById("confirmPword");
const error = document.getElementById("small");
const button = document.getElementById("button")

function passwords(){
  var passwordValue = password.value;
  var checkValue = check.value;
  if(checkValue != passwordValue){
    check.setCustomValidity(" ");
    password.setCustomValidity(" ");
    error.textContent = "*passwords must match";
  }else {
    check.setCustomValidity("");
    password.setCustomValidity("");
  }
  check.reportValidity();
}

button.addEventListener("click", (e)=>{
  passwords();
}) 
  
