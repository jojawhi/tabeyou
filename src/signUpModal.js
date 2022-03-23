import { closeModal } from './loginModal';
import { createNewUser } from './userModel';
const generateSignUpCloseButton = () => {
    const signUpCloseButton = document.createElement('button');
    signUpCloseButton.classList.add('recipe-modal-close-button');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    signUpCloseButton.appendChild(closeIcon);
    signUpCloseButton.addEventListener('click', () => {
        closeModal('signup-modal');
    });
    return signUpCloseButton;
};
const generateSignUpHeading = () => {
    const signUpHeading = document.createElement('h2');
    signUpHeading.classList.add('page-subheading');
    signUpHeading.textContent = 'Create new account';
    return signUpHeading;
};
const generateSignUpButton = () => {
    const signUpButton = document.createElement('button');
    signUpButton.classList.add('button');
    signUpButton.setAttribute('type', 'submit');
    signUpButton.setAttribute('id', 'signup-modal-button');
    signUpButton.textContent = 'Create account';
    signUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        if (password === confirmPassword) {
            createNewUser(email, password);
        }
    });
    return signUpButton;
};
const generateSignUpForm = () => {
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    const emailInputLabel = document.createElement('label');
    emailInputLabel.classList.add('login-input-label');
    emailInputLabel.setAttribute('for', 'email');
    emailInputLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.classList.add('login-input');
    emailInput.setAttribute('id', 'signup-email');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('autocomplete', 'email');
    const passwordInputLabel = document.createElement('label');
    passwordInputLabel.classList.add('login-input-label');
    passwordInputLabel.setAttribute('for', 'password');
    passwordInputLabel.textContent = 'Choose a password:';
    const passwordInput = document.createElement('input');
    passwordInput.classList.add('login-input');
    passwordInput.setAttribute('id', 'signup-password');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('autocomplete', 'new-password');
    passwordInput.setAttribute('name', 'password');
    const confirmPasswordInputLabel = document.createElement('label');
    confirmPasswordInputLabel.classList.add('login-input-label');
    confirmPasswordInputLabel.setAttribute('for', 'confirm-password');
    confirmPasswordInputLabel.textContent = 'Confirm password:';
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.classList.add('login-input');
    confirmPasswordInput.setAttribute('id', 'signup-confirm-password');
    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('autocomplete', 'new-password');
    confirmPasswordInput.setAttribute('name', 'confirm-password');
    formContainer.appendChild(emailInputLabel);
    formContainer.appendChild(emailInput);
    formContainer.appendChild(passwordInputLabel);
    formContainer.appendChild(passwordInput);
    formContainer.appendChild(confirmPasswordInputLabel);
    formContainer.appendChild(confirmPasswordInput);
    formContainer.appendChild(generateSignUpButton());
    return formContainer;
};
const generateSignUpModalSection = () => {
    const loginModalSection = document.createElement('section');
    loginModalSection.classList.add('login-ui-container');
    loginModalSection.setAttribute('id', 'signup-modal');
    loginModalSection.appendChild(generateSignUpCloseButton());
    loginModalSection.appendChild(generateSignUpHeading());
    loginModalSection.appendChild(generateSignUpForm());
    return loginModalSection;
};
const generateSignUpModal = () => {
    document.body.appendChild(generateSignUpModalSection());
};
export default generateSignUpModal;
