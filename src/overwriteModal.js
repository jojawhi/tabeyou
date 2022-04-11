import { generateModalSection, generatePageButton, closeModal } from './components';
import { deleteCurrentGroceryList, addGroceryListToDBWithoutCheck } from './groceryListModel';
import { userID } from './userModel';
export const generateOverwriteModal = () => {
    const modal = generateModalSection('overwrite-grocery-modal', 'Wait!');
    modal.classList.add('text-center');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('padding-vertical');
    const message = document.createElement('p');
    message.innerHTML =
        'You already have a grocery list on the go.</br>Are you sure you want to overwrite it?</br>You will have to re-add any items that were not part of your meal plan.';
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('grid-2-column', 'padding-top');
    const yesButton = generatePageButton('Yes', 'overwrite-yes-button');
    yesButton.addEventListener('click', () => {
        deleteCurrentGroceryList(userID()).then(() => {
            addGroceryListToDBWithoutCheck(userID());
        });
        closeModal('overwrite-grocery-modal');
    });
    const cancelButton = generatePageButton('Cancel', 'overwrite-cancel-button');
    cancelButton.addEventListener('click', () => {
        closeModal('overwrite-grocery-modal');
    });
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(cancelButton);
    contentContainer.appendChild(message);
    contentContainer.appendChild(buttonContainer);
    modal.appendChild(contentContainer);
    return modal;
};
