let form = document.getElementById("form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let position = document.getElementById("position");
let maleRadio = document.getElementById('male');
let femaleRadio = document.getElementById('female');
let secretRadio = document.getElementById('secret');
let password = document.getElementById("password");
let check = document.getElementById("check");
let errorIcon = document.querySelectorAll(".error-icon");
let nameOutput= document.getElementById("nameValidity");
let emailOutput = document.getElementById("emailValidity");
let genderOutput = document.getElementById("genderValidity");
let positionOutput = document.getElementById("positionValidity");
let passwordOutput = document.getElementById("passValidity");
let checkOutput = document.getElementById("checkValidity");

var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//function to check the validity
function validateInput(){
    if(fullName.value === "" || fullName.value == null){
        nameOutput.innerHTML = "Username field cannot be blank!";
        nameOutput.classList.add('invalid'); 
        errorIcon[0].style.display = "inline-block";     
    }else{
        nameOutput.innerHTML = "Username field is valid!";
        nameOutput.classList.remove('invalid');
        nameOutput.classList.add('valid');
        errorIcon[0].style.display = "none";
    };
    if(!email.value.match(email_check)){
        emailOutput.innerHTML = "Email field cannot be blank!";
        emailOutput.classList.add('invalid');
        errorIcon[1].style.display = "inline-block";
    }else{
        emailOutput.innerHTML = "Email field is valid!";
        emailOutput.classList.remove('invalid');
        emailOutput.classList.add('valid');
        errorIcon[1].style.display = "none";
    };
    if(position.value === ""){
        positionOutput.innerHTML="Please select a position!";
        positionOutput.classList.add('invalid');
        errorIcon[2].style.display = "inline-block";
    }else{
        positionOutput.innerHTML = "You selected a position!";
        positionOutput.classList.remove('invalid');
        positionOutput.classList.add('valid');
        errorIcon[2].style.display = "none";
    };
    if(!maleRadio.checked && !femaleRadio.checked && !secretRadio.checked){
        genderOutput.innerHTML = "Please select a gender!";
        genderOutput.classList.add('invalid');
    }else{
        genderOutput.innerHTML = "You selected a gender!";
        genderOutput.classList.remove('invalid');
        genderOutput.classList.add('valid'); 
    };
    if(password.value === "" || password.value == null){
        passwordOutput.innerHTML = "Password field cannot be blank!";
        passwordOutput.classList.add('invalid');
        errorIcon[3].style.display = "inline-block";
    }else{
        passwordOutput.innerHTML = "Password field is valid!";
        passwordOutput.classList.remove('invalid');
        passwordOutput.classList.add('valid');
        errorIcon[3].style.display = "none";
    }; 
    if(!check.checked){
        check.style.cssText = "border: 1px solid red"; 
        checkOutput.innerHTML = "Please confirm that the entered data are all correct"; 
        checkOutput.classList.add('invalid');    
    }else{
        check.style.cssText = "border: none";
        checkOutput.innerHTML = "";
    }
};
//Add event listener for input changes
fullName.addEventListener("input", validateInput);
email.addEventListener("input", validateInput);
position.addEventListener("change", validateInput);
maleRadio.addEventListener("change", validateInput);
femaleRadio.addEventListener("change", validateInput);
secretRadio.addEventListener("change", validateInput);
password.addEventListener("input", validateInput);
check.addEventListener("change", validateInput);
//Form submission validation
form.addEventListener("submit", (e) => {
    validateInput();
    if (fullName.classList.contains('invalid') ||
        email.classList.contains('invalid') ||
        position.classList.contains('invalid') ||
        ( !maleRadio.checked && !femaleRadio.checked && !secretRadio.checked ) ||
        password.classList.contains('invalid') ||
        !check.checked) {
        e.preventDefault();
    }else{
        alert(`welcome ${fullName.value}`);
    }
});