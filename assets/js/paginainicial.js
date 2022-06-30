const inputName = document.querySelector('#input_name');
const btnSubmitForm = document.querySelector('#login_btn');
const form = document.querySelector ('.form_login');


function validateInput({target}){

    let text = target.value.split(' ').filter(value => value != '')

    text = text.join(' ').length

    if(text > 2){
        btnSubmitForm.removeAttribute('disabled');
        return
    }

    btnSubmitForm.setAttribute('disabled', '');
}

function handleName(event){
    event.preventDefault();

    let username = inputName.value

    localStorage.setItem('username', username);

    window.location = '../game.html';

}

inputName.addEventListener('input', validateInput);
form.addEventListener('submit', handleName);