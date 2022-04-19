import generateSignUpModal from './signUpModal';
import { signIn } from './userModel';
import { generateCloseButton, closeModal } from './components';
const generateLoginHeading = () => {
    const loginHeading = document.createElement('h2');
    loginHeading.classList.add('page-subheading');
    loginHeading.textContent = 'Log in or Sign up';
    return loginHeading;
};
const generateLoginButton = () => {
    const loginButton = document.createElement('button');
    loginButton.classList.add('button');
    loginButton.setAttribute('type', 'submit');
    loginButton.setAttribute('id', 'login-modal-button');
    loginButton.textContent = 'Log in';
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        if (email && password) {
            signIn(email, password);
            closeModal('login-modal');
        }
        else {
            closeModal('login-modal');
        }
    });
    return loginButton;
};
const generateLoginForm = () => {
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    const usernameInputLabel = document.createElement('label');
    usernameInputLabel.classList.add('login-input-label');
    usernameInputLabel.setAttribute('for', 'username');
    usernameInputLabel.textContent = 'Email:';
    const usernameInput = document.createElement('input');
    usernameInput.classList.add('login-input');
    usernameInput.setAttribute('name', 'username');
    usernameInput.setAttribute('id', 'login-username');
    usernameInput.setAttribute('autocomplete', 'username');
    const passwordInputLabel = document.createElement('label');
    passwordInputLabel.classList.add('login-input-label');
    passwordInputLabel.setAttribute('for', 'password');
    passwordInputLabel.textContent = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.classList.add('login-input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'login-password');
    passwordInput.setAttribute('autocomplete', 'current-password');
    passwordInput.setAttribute('name', 'password');
    formContainer.appendChild(usernameInputLabel);
    formContainer.appendChild(usernameInput);
    formContainer.appendChild(passwordInputLabel);
    formContainer.appendChild(passwordInput);
    formContainer.appendChild(generateLoginButton());
    return formContainer;
};
const generateRetrievePasswordButton = () => {
    const retrievePasswordButton = document.createElement('button');
    retrievePasswordButton.classList.add('minor-button');
    retrievePasswordButton.setAttribute('id', 'retrieve-password-button');
    retrievePasswordButton.textContent = 'Forgot password?';
    return retrievePasswordButton;
};
const generateSignUpButton = () => {
    const signUpButton = document.createElement('button');
    signUpButton.classList.add('button');
    signUpButton.setAttribute('id', 'signup-modal-button');
    signUpButton.textContent = 'Sign up';
    signUpButton.addEventListener('click', () => {
        closeModal('login-modal');
        generateSignUpModal();
    });
    return signUpButton;
};
const generateSignUpButtonContainer = () => {
    const signUpButtonContainer = document.createElement('div');
    signUpButtonContainer.classList.add('form-container');
    const signUpText = document.createElement('p');
    signUpText.classList.add('signup-text');
    signUpText.textContent = "Don't have an account yet?";
    signUpButtonContainer.appendChild(signUpText);
    signUpButtonContainer.appendChild(generateSignUpButton());
    return signUpButtonContainer;
};
const generateLoginModalSection = () => {
    const loginModalSection = document.createElement('section');
    loginModalSection.classList.add('login-ui-container');
    loginModalSection.setAttribute('id', 'login-modal');
    loginModalSection.appendChild(generateCloseButton('login-modal'));
    loginModalSection.appendChild(generateLoginHeading());
    loginModalSection.appendChild(generateLoginForm());
    loginModalSection.appendChild(generateRetrievePasswordButton());
    loginModalSection.appendChild(generateSignUpButtonContainer());
    return loginModalSection;
};
const generateLoginModal = () => {
    document.body.appendChild(generateLoginModalSection());
};
export default generateLoginModal;
