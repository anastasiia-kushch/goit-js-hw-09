const formEl = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const storedState = localStorage.getItem(storageKey);

if(storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageTextarea.value = message;
}

formEl.addEventListener('input', function(event) {
    const currentState = {
        email: emailInput.value,
        message: messageTextarea.value
    };

    localStorage.setItem(storageKey, JSON.stringify(currentState));
})

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageTextarea.value
    }

    console.log('Form data: ', formData);
    
    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageTextarea.value = '';
})