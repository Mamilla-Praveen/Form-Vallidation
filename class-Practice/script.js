const form = document.getElementById("form")

const uname = document.getElementById("uname")

const email = document.getElementById("email")

const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc = document.getElementById("tc")

let isValidName = false;
let isValidEmail = false;
let isValidPassword = false;
let isValidCPassword = false;
let isTCChecked = false;

uname.addEventListener('keyup', checkUserName)
email.addEventListener('keyup', checkEmail)
password.addEventListener('keyup', checkPassword)
cpassword.addEventListener('keyup', checkCPassword)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    Validate()
})


function Validate() {

    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isTCChecked = false;

    checkUserName();

    checkEmail();

    checkPassword();

    checkCPassword();
    
    checkTandC();

}
function checkUserName() {
    const nameValue = uname.value.trim()
    if (nameValue === '') {
        setError(uname, 'user name cannot be empty')
    }
    else if (nameValue.length < 3) {
        setError(uname, "user name should not be minimum 3 characters")
    }
    else {
        setSuccess(uname)
        isValidName = true
    }
}

function checkEmail() {
    const emailValue = email.value.trim()
    if (emailValue === '') {
        setError(email, 'email should not be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'enter valid email')
    }
    else {
        setSuccess(email)
        isValidEmail = true
    }
}

function checkPassword() {
    const passwordValue = password.value.trim()
    if (passwordValue === '') {
        setError(password, 'password should not be empty')
    }
    else if (passwordValue.length < 8) {
        setError(password, 'password should be more than 8 characters')
    }
    else {
        setSuccess(password)
        isValidPassword = true
    }
}

function checkCPassword() {
    const cpasswordValue = cpassword.value.trim()
    const passwordValue = password.value.trim()
    if (cpasswordValue === '') {
        setError(cpassword, 'confirm password should not be empty')
    }
    else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'confirm password should be same as password')
    }
    else {
        setSuccess(cpassword)
        isValidCPassword = true
    }
}

function checkTandC() {
    if (!tandc.checked) {
        setError(tc, 'click on agree terms checkbox')
    }
    else {
        setSuccess(tandc)
        isTCChecked = true
    }

    if (isTCChecked && isValidCPassword && isValidEmail && isValidName && isValidPassword) {
        console.log("submitted")
        // window.location.href="file.html";
        form.submit()
    }
}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)

    return valid
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error');
    parent.classList.remove('success')
}
function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')

}