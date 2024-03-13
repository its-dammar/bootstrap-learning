
function responsive() {
    let x = document.getElementById("nav");

    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}


function formValidation(){
    let name= document.getElementById("nErrorMessage");
    let phone= document.getElementById("pErrorMessage");
    let email= document.getElementById("eErrorMessage");
    let pass= document.getElementById("passErrorMessage");
    let cpass= document.getElementById("cPassErrorMessage");

    if(document.myFrom.name.value==""){
        document.getElementById("nErrorMessage").innerHTML="Name is required";
        name.style.color="red";
        return false;
    }
    else{
        // name.style.display="none";
        document.getElementById("nErrorMessage").innerHTML= "Accepted";
        name.style.color="green";
    }

    if(document.myFrom.phone.value==""){
        document.getElementById("pErrorMessage").innerHTML="Phone is required";
        return false;
    }
    else if(isNaN(document.myFrom.phone.value)){
        document.getElementById("pErrorMessage").innerHTML="Phone must be numeric";
        return false;
    }
    else if(document.myFrom.phone.value.length!=10){
        document.getElementById("pErrorMessage").innerHTML="Phone must 10 digit";
        return false;
    }else{
        phone.style.display="none";
    }

     if(document.myFrom.email.value==""){
        document.getElementById("eErrorMessage").innerHTML="Email is required ";
        return false;
    }
    else{
        email.style.display="none";
    }


    if(document.myFrom.password.value==""){
        document.getElementById("passErrorMessage").innerHTML="Password is required ";
        pass.style.color="red";
        return false;
    }
    else if(document.myFrom.password.value.length<5){
        document.getElementById("passErrorMessage").innerHTML="Week password ";
        pass.style.color="red";
        return false; 
    }
    else if(document.myFrom.password.value.length<8){
        document.getElementById("passErrorMessage").innerHTML="intermediate password ";
        pass.style.color="yellow";
        return false; 
    }
    else if(document.myFrom.password.value.length<8){
        document.getElementById("passErrorMessage").innerHTML="Strong";
        pass.style.color="green";
        return false; 
    }
    else{
        document.getElementById("passErrorMessage").innerHTML="Strong";
        pass.style.color="green";
    }

    if(document.myFrom.cpassword.value==""){
        document.getElementById("cPassErrorMessage").innerHTML="Confirm Password is required ";
        pass.style.color="red";
        return false;
    }
    else if(document.myFrom.password.value.length!=document.myFrom.cpassword.value.length){
        document.getElementById("cPassErrorMessage").innerHTML="Password Does not match ";
        pass.style.color="red";
        return false; 
    }
    else{
        cpass.style.display="none";
    }



    return true;
}
