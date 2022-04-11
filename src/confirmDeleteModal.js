import { generateModalSection, generatePageButton, closeModal } from './components';
import { deleteRecipeFromDB } from './recipeModel';
import displayRecipeList from './recipeListView';
import sectionFactory from './section';
import { userID } from './userModel';
export const generateConfirmDeleteModal = () => {
    const modal = generateModalSection('confirm-delete-recipe-modal', 'Wait!');
    modal.classList.add('text-center');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('padding-vertical');
    const message = document.createElement('p');
    message.innerHTML = `Are you sure you want to delete this recipe? This can't be undone.`;
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('grid-2-column', 'padding-top');
    const yesButton = generatePageButton('Delete', 'delete-yes-button');
    yesButton.addEventListener('click', () => {
        const modal = document.getElementById('recipe-modal');
        if (modal) {
            const header = modal.children[1];
            const heading = header.children[1].textContent;
            console.log(`Heading: ${heading}`);
            deleteRecipeFromDB(userID(), heading).then(() => {
                closeModal('recipe-modal');
                const section = document.getElementById('content-section');
                if (section) {
                    sectionFactory().clearSection(section);
                    displayRecipeList(section);
                }
            });
        }
        closeModal('confirm-delete-recipe-modal');
    });
    const cancelButton = generatePageButton('Cancel', 'delete-cancel-button');
    cancelButton.addEventListener('click', () => {
        closeModal('confirm-delete-recipe-modal');
    });
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(cancelButton);
    contentContainer.appendChild(message);
    contentContainer.appendChild(buttonContainer);
    modal.appendChild(contentContainer);
    return modal;
};
