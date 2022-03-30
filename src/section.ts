const sectionFactory = () => {
	const createSection = () => {
		const section = document.createElement('section');
		section.classList.add('content-section');
		section.setAttribute('id', 'content-section');

		return section;
	};

	const clearSection = (section: HTMLElement) => {
		section.innerHTML = '';
	};

	return { createSection, clearSection };
};

export default sectionFactory;

// Refactor to simple functions and add to components.ts
