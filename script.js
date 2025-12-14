function registerUser() {
    // enter full name
    let fullName = prompt("enter your full name");
    // validateFullName(fullName)

    while (validateFullName(fullName) == false) {
        fullName = prompt("full name not valid, enter at least two names");
    }
    if (fullName == null) {
        return
    }


    //enter email
    let email = prompt("enter your email address")
    while (validateEmail(email) == false) {
        email = prompt("enter a valid email address");
    }

    if (email == null) {
        return
    }


    //enter password
    let password = prompt("enter your password");
    
    while (validatePassword(password) == false) {
        password = prompt("enter a valid password");
    }
    if (password == null) {
        return 
    }

    

    //password confirm
    let passwordConfirm = prompt("confirm your password")
    while (passwordConfirm !== password) {
        passwordConfirm = prompt("password incorrect! confirm your password again")
    }
    if (passwordConfirm == null) {
        return
    }


    // age
    let age = prompt("enter your age")
    while (validateAge(age) == false) {
        age = prompt("enter a valid age");
    }
    if (age == null) {
        return
    }
}


registerUser();
alert(CEnd of registration!")




function validateFullName(fullName) {
    if (fullName == null) {
        return true
    }
    const words = fullName.trim().split(/\s+/)

    if (words.length < 2) {
        alert("invalid full name")
        return false
    } else {
        return true
    }

}



function validateEmail(email) {
    if (email == null) {
        return true
    }
    email = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("incorrect email address!");
        return false;
    } else {
        return true
    }

}


function validatePassword(password) {
    if (password == null) {
        return true
    }
    // 
    if (password.length < 8) {
        alert("Password must contain at least 8 characters, with one uppercase letter, one number, and one special character.");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least 8 characters, with one uppercase letter, one number, and one special character.");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        alert(" Password must contain at least 8 characters, with one uppercase letter, one number, and one special character.");
        return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert("Password must contain at least 8 characters, with one uppercase letter, one number, and one special character.");
        return false;
    } else {
        return true;
    }
}

function validateAge(age) {
    if (age == null) {
        return true
    }
    if (age < 18) {
        alert("you must be 18 years or older")
        return false
    } else {
        return true
    }
}