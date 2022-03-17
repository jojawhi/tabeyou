import './style.css';
import createNav from './nav';
import sectionFactory from './section';
import createHeader from './header';
import createFooter from './footer';
const createPageContainer = () => {
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');
    pageContainer.setAttribute('id', 'page-container');
    return pageContainer;
};
const generatePageElements = () => {
    document.body.appendChild(createHeader());
    const pageContainer = document.body.appendChild(createPageContainer());
    document.body.appendChild(createFooter());
    pageContainer.appendChild(createNav());
    const section = sectionFactory().createSection();
    pageContainer.appendChild(section);
};
generatePageElements();
