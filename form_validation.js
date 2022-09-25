document.getElementById("submit").onclick=function(){
    var doSubmit = validateForm();

    if(doSubmit == false){
        return false;
    }
}