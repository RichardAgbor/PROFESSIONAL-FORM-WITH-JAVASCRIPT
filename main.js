// let's cxall our form classes and ids
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


// store the classes and ids in variables
let username = id('username'),
emeail = id('email'),
password = id('password'),


errorMsg = classes('error'),
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon');


// target form and add eventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();


    myForm(username, 0, 'Username cannot be blank');
    myForm(email, 1, 'Email cannot be blank');
    myForm(password, 2, 'password cannot be blank');

});

// let's create a function to help us with our form validtion
let myForm = (id, serial, message) => {
    if (id.value.trim() ==='') {
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';

        // the icons
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }

    else{
        errorMsg[serial].innerHTML = '';
        id.style.border = '2px solid skyblue';

        // the icons

        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}



