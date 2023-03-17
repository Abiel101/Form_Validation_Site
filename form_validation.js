document.getElementById("submit").onclick=function(){
    var doSubmit = validateForm();

    if(doSubmit == false){
        return false;
    }
}
function validateForm(){
    // Inputs
    var email = document.getElementById("input-email");
    var password = document.getElementById("input-password");
    // Input values 
    var emailValue = email.value;
    var passwordValue = password.value;

    // Email and Password images for x and check mark
    var emailCheck = document.getElementById("email-checkmark");
    var emailXmark = document.getElementById("email-xmark");
    var passwordCheck = document.getElementById("password-checkmark");
    var passwordXmark = document.getElementById("password-xmark");

    // Email show indicator and vorder
    if(emailValue != "abiel.code.dev@gmail.com"){
        emailXmark.classList.add("show-indicator");
        email.style.border = "solid 2px red"
        email.select();
    }else{
        emailXmark.classList.remove("show-indicator");
        emailCheck.classList.add("show-indicator");
        email.style.border = "solid 2px green"
    }

    // Password show indicator and border
    if(passwordValue.length < 8){
        passwordXmark.classList.add("show-indicator");
        password.style.border = "solid 2px red"
        password.select();
        return false;
    } else if(passwordValue.length >= 8){
        passwordXmark.classList.remove("show-indicator");
        passwordCheck.classList.add("show-indicator");
        password.style.border = "solid 2px green"

        return true; //To see green color (might need to make for loop to loop and continue checking.)
    } else{
        alert("There is a system error");
    }

    // if(email is good && password is good){return true} else {return false}

}

/*TODO: Moving to Things

1. Create for loop to constantly be checking on the inputs 
2. Create variable that will return true to the submit button so that the form can be submitted.
3. Add specifications to conditions to website, if it has an @ or .com, or password to contain A, a, 1, & and 8 characters (I can create an external function that returns and array and if its true it gets enters to true in the code and then thats where I can say if both are true then return true.) 
like emailCorrect = true, passwordCorrect = true { return true; }
    use external function using argument to return an array of information and I can use that to return either false or true.
*/