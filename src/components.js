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
