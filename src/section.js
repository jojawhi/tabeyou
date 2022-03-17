const sectionFactory = () => {
    const createSection = () => {
        const section = document.createElement('section');
        section.classList.add('content-section');
        section.setAttribute('id', 'content-section');
        return section;
    };
    const clearSection = (section) => {
        section.innerHTML = '';
    };
    return { createSection, clearSection };
};
export default sectionFactory;
