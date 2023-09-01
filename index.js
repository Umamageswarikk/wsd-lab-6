function validate(){
    var name=document.forms.registrationform.name.value;
    var email=document.forms.registrationform.email.value;
    var password=document.forms.registrationform.password.value;
    var confirm_password=document.forms.registrationform.confirm_password.value;
    var dob=document.forms.registrationform.dob.value;

    var regname=/^[A-Za-z{3}\s]*$/g;
    var regemail=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;
    var regpassword=/^[A-Za-z0-9{8}]/;
    var regdob=/^\d{4}\-\d{2}\-\d{2}$/;

    if (name == ""||regname.test(name)) {
        window.alert("please enter valid name!");
        name.focus();
        return false;
    }
    if (email == ""||!regemail.test(email)) {
        window.alert("please enter valid email!");
        email.focus();
        return false;
    }
    if (password == ""||regpassword.test(password)) {
        window.alert("please enter valid email!");
        email.focus();
        return false;
    }
    return true;



}

  