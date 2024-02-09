
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const year=document.getElementById('year');
const dep=document.getElementById('dep');
const ev=document.getElementById('ev');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirm.value.trim();
    const yearValue = year.value.trim();
    const depValue=dep.value.trim();
    const evValue=dep.value.trim();
    


    if (nameValue === '') {
        setErrorFor(name, 'Please enter your name');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Please enter your rollno');
    }
     else {
        setSuccessFor(password);
    }
    if (confirmValue === '') {
        setErrorFor(confirm, 'Please enter your contact number');
    } else if (!phonenumber(confirmValue)) {
        setErrorFor(confirm, 'contact number should be 10 digit');
    } else {
        setSuccessFor(confirm);
    }
    if (yearValue === '') {
        setErrorFor(year, 'Please enter your year of study');
    } else {
        setSuccessFor(year);
    }
    if (depValue === '') {
        setErrorFor(dep, 'Please enter your department');
    } else {
        setSuccessFor(dep);
    }
    if (evValue === '') {
        setErrorFor(ev, 'Please enter your event name');
    } else {
        setSuccessFor(ev);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function phonenumber(confirm)
{
    if(confirm.length == 10)
       return true;
    else
       return false;
}




