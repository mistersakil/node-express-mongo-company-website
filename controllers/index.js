/* Controllers Frontend */

// const { fourOfour } = require(`./frontend/ErrorController`);
// const { home } = require(`./frontend/HomeController`);
// const { contact } = require(`./frontend/ContactController`);
// const { about } = require(`./frontend/AboutController`);
// const { blog, blogSingle } = require(`./frontend/BlogController`);
// const { gallery } = require(`./frontend/GalleryController`);
// const { portfolio, portfolioSingle } = require(`./frontend/PortfolioController`);
// const { service, serviceSingle } = require(`./frontend/ServiceController`);
// const { userRegister, userRegistrationProcess, userLogin } = require(`./frontend/UserAuthController`);


const ErrorController = require(`./frontend/ErrorController`);
const HomeController = require(`./frontend/HomeController`);
const ContactController = require(`./frontend/ContactController`);
const AboutController = require(`./frontend/AboutController`);
const BlogController = require(`./frontend/BlogController`);
const GalleryController = require(`./frontend/GalleryController`);
const PortfolioController = require(`./frontend/PortfolioController`);
const ServiceController = require(`./frontend/ServiceController`);
const UserAuthController = require(`./frontend/UserAuthController`);

module.exports = { frontend: { ...ErrorController, ...HomeController, ...ContactController, ...AboutController, ...BlogController, ...GalleryController, ...PortfolioController, ...ServiceController, ...UserAuthController } };
