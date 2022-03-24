//Utility function?
export const closeModal = (modalID: string) => {
	const modal: HTMLElement | null = document.getElementById(modalID);

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

export const generateCloseButton = (parentID: string): HTMLElement => {
	const closeButton: HTMLElement = document.createElement('button');
	closeButton.classList.add('recipe-modal-close-button');

	const closeIcon: HTMLElement = document.createElement('i');
	closeIcon.classList.add('fa-solid', 'fa-xmark');

	closeButton.appendChild(closeIcon);

	closeButton.addEventListener('click', () => {
		closeModal(parentID);
	});

	return closeButton;
};
