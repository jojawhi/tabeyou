import { generateModalSection, generatePageButton } from './components';
export const generateOverwriteModal = () => {
    const modal = generateModalSection('overwrite-grocery-modal', 'Whoops!');
    const contentContainer = document.createElement('div');
    const message = document.createElement('p');
    message.innerHTML =
        'You already have a grocery list on the go.</br>Are you sure you want to overwrite it? You will lose any items you have added that are not part of your meal plan.';
    const buttonContainer = document.createElement('div');
    const yesButton = generatePageButton('Yes', 'overwrite-yes-button');
    const cancelButton = generatePageButton('Cancel', 'overwrite-cancel-button');
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(cancelButton);
    contentContainer.appendChild(message);
    contentContainer.appendChild(buttonContainer);
    modal.appendChild(contentContainer);
    return modal;
};
