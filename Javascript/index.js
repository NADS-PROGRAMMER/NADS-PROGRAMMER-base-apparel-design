"use strict"

const softRed = 'hsl(0, 93%, 68%)';
const desaturatedRed = 'hsl(0, 36%, 70%)'

const setState = (emailBorderColor, visibility) => {

    const emailField = document.querySelector('input[type="email"]')
    const errorIcon = document.querySelector('.error-icon')
    const errorMessage = document.querySelector('.error-message')

    emailField.style.border = `1px solid ${emailBorderColor}`;
    errorIcon.style.visibility = visibility;
    errorMessage.style.visibility = visibility;
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

document.querySelector('form').addEventListener('submit', (e) => {

    e.preventDefault();
})

document.querySelector('button').addEventListener('click', () => {

    const emailField = document.querySelector('input[type="email"]')

    if (emailField.value === '' || validateEmail(emailField.value) === false) {
        setState(softRed, 'visible')
    }
        
}) 

document.querySelector('input[type="email"]').addEventListener('input', () => {

    setState(desaturatedRed, 'hidden')
})

console.log('hello')