export const generatePageSubheading = (string) => {
    const pageSubheading = document.createElement('h3');
    pageSubheading.classList.add('page-subheading');
    pageSubheading.textContent = string;
    return pageSubheading;
};
export const closeModal = (modalID) => {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.remove();
    }
};
export const generateDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('grocery-list-delete-button');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-circle-minus');
    deleteButton.addEventListener('click', (e) => {
        const parent = deleteButton.parentElement;
        if (parent) {
            parent.remove();
        }
    });
    deleteButton.appendChild(deleteIcon);
    return deleteButton;
};
export const generateCloseButton = (parentID) => {
    const closeButton = document.createElement('button');
    closeButton.classList.add('recipe-modal-close-button');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener('click', () => {
        closeModal(parentID);
    });
    return closeButton;
};
export const generateModalSection = (id, heading, ...children) => {
    const modalSection = document.createElement('section');
    modalSection.classList.add('recipe-modal');
    modalSection.setAttribute('id', id);
    modalSection.appendChild(generateCloseButton(id));
    modalSection.appendChild(generatePageSubheading(heading));
    if (children) {
        for (let i = 0; i < children.length; i++) {
            modalSection.appendChild(children[i]);
        }
    }
    return modalSection;
};
export const generatePageButton = (buttonText, buttonID) => {
    const pageButton = document.createElement('button');
    pageButton.classList.add('button');
    pageButton.setAttribute('id', buttonID);
    pageButton.textContent = buttonText;
    return pageButton;
};
export const generateUtilityButton = (buttonText, buttonID) => {
    const utilityButton = document.createElement('button');
    utilityButton.classList.add('utility-button');
    utilityButton.setAttribute('id', buttonID);
    utilityButton.textContent = buttonText;
    return utilityButton;
};
