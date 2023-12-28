const formEl = document.querySelector('.feedback-form')
const storageKey = 'feedback-form-state';

const storedState = localStorage.getItem(storageKey);

if(storedState) {
    const { email, message } = JSON.parse(storedState);
    formEl.email.value = email;
    formEl.message.value = message;
}

formEl.addEventListener('input', function(event) {
    const currentState = {
        email: formEl.email.value.trim(),
        message: formEl.message.value.trim()
    };

    localStorage.setItem(storageKey, JSON.stringify(currentState));
});

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    if(!formEl.email.value || !formEl.message.value) {
        alert('Please fill out all fields before submitting!');
        return;
    }

    const formData = {
        email: formEl.email.value,
        message: formEl.message.value
    }

    console.log('Form data: ', formData);
    formEl.reset();
    localStorage.removeItem(storageKey);
})