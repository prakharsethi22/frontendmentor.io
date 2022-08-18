const form = document.querySelector('#form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const firstNameInput = firstName.value.trim();
    const lastNameInput = lastName.value.trim();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();

    if (firstNameInput === '') {

        invalidInput(firstName,'First name cannot be empty')
        
    }
    else {

        validInput(firstName)
    }
    if (lastNameInput === '') {
        invalidInput(lastName,'Last name name cannot be empty')
        
    }
    else {

        validInput(lastName)
    }
    if (emailInput === '') {
   
        invalidInput(email,'Email address cannot be empty')
        
    }

    else if (!emailInput.match(pattern)){
        invalidInput(email,'Looks like this is not an email')
    }
    else {
        validInput(email)
    }
    if (passwordInput === '') {
        invalidInput(password,'Password cannot be empty')
        
    }
    else {
        validInput(password)
    }
})

function invalidInput(ele, message) {
    const par = ele.parentElement;
    const errorSpan = par.querySelector('span');
    errorSpan.innerText = message;
    ele.classList.add('error');
    errorSpan.classList.add('error-message')


}

function validInput(ele)  {
    ele.className += 'success';
}