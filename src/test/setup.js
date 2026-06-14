import '@testing-library/jest-dom';

// jsdom does not implement window.scrollTo — mock it to suppress warnings
window.scrollTo = () => {};
