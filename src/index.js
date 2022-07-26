import './style.css';
import countryList from './countryList.js';


// Email, Country, Zip Code, Password and Password Confirmation fields.

function makeTitle() {
    const title = document.createElement('div');
    title.className = 'title';
    const h1 = document.createElement('h1');
    h1.textContent = 'User Submit Form';
    title.appendChild (h1);

    return title;
}

//creating a factory function for inputs
const Input = (type, id, name) => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.setAttribute('for', id);
    label.textContent = name[0].toUpperCase()+name.slice(1, name.length);
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    container.append(label, input, span);
    container.className = 'input-container';

    return {container};
}

const CountryList = () => {
    const cl = countryList();
    const container = document.createElement('div');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const span = document.createElement('span');

    label.setAttribute('for', 'country-list');
    label.textContent = 'Choose your Country';
    select.setAttribute('name', 'country-list');
    select.setAttribute('id', 'country-list');
    for (let i = 0; i < cl.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', cl[i]);
        option.textContent = cl[i];
        select.appendChild(option);
    }
    container.append(label, select, span);
    container.className = 'input-container';

    return {container};
}

const ZipCode = () => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.setAttribute('for', 'zip-code');
    label.textContent = 'Enter your zip code';
    input.setAttribute('id', 'zip-code');
    input.setAttribute('name', 'zip-code');
    input.setAttribute('type', 'text');
    input.setAttribute('pattern', '[0-9]{4}[A-Za-z]{2}');

    container.append(label, input, span);
    container.className = 'input-container';
    return {container};
}

const SubmitBtn = () => {
    const btnDiv = document.createElement ('div');
    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    btn.className = 'submit-btn';

    btnDiv.appendChild(btn);
    btnDiv.setAttribute('style', 'display:flex; justify-content: center; align-items: center');
    return {btnDiv};
}

function checkErrors(input) {
    const span = document.querySelector(`#${input.id}+span`);
    span.className = 'error-msg';
    if (input.validity.valueMissing) {
        input.classList.add('input-error');
        span.textContent = "This is a required field.";
    }
    else if (input.validity.typeMismatch) {
        input.classList.add('input-error');
        span.textContent = 'Use a right format.';
    }
    else if (input.validity.patternMismatch) {
        input.classList.add('input-error');
        span.textContent = 'Pattern is not correct.';
    }
    else if (input.validity.valid) {
        input.classList.remove('input-error');
        span.textContent = "";
        span.className = '';
    }
}

function checkPasswords(passwords) {
    const inputs = Array.from(document.querySelectorAll('[type=password]'));
    console.log(inputs);
    if (passwords[0] === passwords[1]) {
        inputs.forEach (input => {
            const span = document.querySelector(`#${input.id}+span`);
            span.textContent = "";
            span.className = '';
        })
    }
    else {
        console.log ("no");
        inputs.forEach (input => {
            const span = document.querySelector(`#${input.id}+span`);
            span.textContent = "Passwords do not match.";
            span.className = 'error-msg';
        })
    }
}

function makeRequired() {
    const inputs = Array.from(document.querySelectorAll('input, select'));
    inputs.forEach (input => {
        input.setAttribute("required", "");
        input.required = true;
        input.addEventListener('input', e => {
            checkErrors(input);
        })
    })
}

function makeForm() {
    const form = document.createElement('form');
    form.setAttribute("novalidate", "");
    form.novalidate = false; 
    const userEmail = Input('email', 'email', 'email');
    const userCountry = CountryList();
    const userZipCode = ZipCode();
    const userPassword1 = Input('password', 'password1', 'password1');
    const userPassword2 = Input('password', 'password2', 'password2');
    userPassword1.container.children[0].textContent = 'Password';
    userPassword2.container.children[0].textContent = 'Confirm password';
    const btn = SubmitBtn();
    form.append(userEmail.container, userCountry.container, 
        userZipCode.container, userPassword1.container, 
        userPassword2.container, btn.btnDiv);
    form.addEventListener('submit', e => {
        const passwords = [];
        const inputs = Array.from(document.querySelectorAll('input', 'select'));
        inputs.forEach(input => {
            e.preventDefault();
            checkErrors(input);
            if (input.type === 'password') {
                passwords.push(input.value);
            }
        })
        checkPasswords(passwords);
    })
    return form;
}

function makeContent() {
    const content = document.createElement('div');
    content.className = 'content';
    content.append (makeTitle(), makeForm());
    
    return content;
}

function makeTemplate() {
    const div = document.createElement('div');
    div.className = 'template';

    div.appendChild(makeContent());
    window.addEventListener('load', e => {
        makeRequired();
    })
    return div;
}

document.body.appendChild(makeTemplate());
//                                FACTORY FUNCTION 
// const testFunction = (n1, n2) => {
//     const i = n1;
//     const j = n2;

//     const sum = () => {
//         return i+j;
//     }

//     return {sum};
// }

// const number1 = testFunction(4,2);
// console.log (number1);
// console.log (testFunction);



//                                   CONSTRUCTOR
// function student(name) {
//     this.name = name;

//     this.introduceSelf = () => {
//         console.log ("Hi, my name is "+this.name);
//     }
// } 
// const maria = new student('Maria');
// maria.introduceSelf();





//                                      CLASS
// class student {
//     constructor(name) {
//         this.name = name;
//     }

//     sayName() {
//         console.log ("Hi, my name is "+this.name);
//     }
// }

// const jose = new student('Jose');
// jose.sayName();

//                                     MODUEL

// const myModule = (function() {
//     variables are private
//     const i = 1;
//     const j = 2;

//     the function is public
//     const sum = () => {
//         return i+j;
//     }

//     what is returned becomes public;
//     return {sum};
// })();

// console.log (myModule);