const generateHeroContent = () => {
	const heroContentContainer = document.createElement('div');
	heroContentContainer.classList.add('hero-content');

	const pageHeading = document.createElement('h2');
	pageHeading.classList.add('page-heading');
	pageHeading.textContent = 'Meal planning made simple';

	const pageSubheading = document.createElement('h3');
	pageSubheading.classList.add('page-subheading');
	pageSubheading.textContent =
		'Tabeyou (tah-bay-yo) generates a grocery list from custom meal plans you can easily build from saved recipes, helping you save money and cook delicious meals';

	heroContentContainer.appendChild(pageHeading);
	heroContentContainer.appendChild(pageSubheading);

	return heroContentContainer;
};

const generateHeroSection = () => {
	const heroSection = document.createElement('section');
	heroSection.classList.add('hero-section');

	heroSection.appendChild(generateHeroContent());

	return heroSection;
};

const generateFeaturesContent = () => {
	const featuresContentContainer = document.createElement('div');
	featuresContentContainer.classList.add('hero-content');

	const pageSubheading = document.createElement('h3');
	pageSubheading.classList.add('page-subheading');
	pageSubheading.textContent = 'Landing page content coming soon!';

	featuresContentContainer.appendChild(pageSubheading);

	return featuresContentContainer;
};

const generateFeaturesSection = () => {
	const featuresSection = document.createElement('section');
	featuresSection.classList.add('feature-section');

	featuresSection.appendChild(generateFeaturesContent());

	return featuresSection;
};

const generateLandingPageContainer = () => {
	const landingPageContainer = document.createElement('div');
	landingPageContainer.classList.add('landing-page-container');

	landingPageContainer.appendChild(generateHeroSection());
	landingPageContainer.appendChild(generateFeaturesSection());

	return landingPageContainer;
};

const generateLandingPage = () => {
	document.body.appendChild(generateLandingPageContainer());
};

export default generateLandingPage;
