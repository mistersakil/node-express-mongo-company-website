/* Controllers Frontend */

const errorController = require(`./frontend/errorController`);
const HomeController = require(`./frontend/HomeController`);
const ContactController = require(`./frontend/ContactController`);
const AboutController = require(`./frontend/AboutController`);
const BlogController = require(`./frontend/BlogController`);
const GalleryController = require(`./frontend/GalleryController`);
const PortfolioController = require(`./frontend/PortfolioController`);
const ServiceController = require(`./frontend/ServiceController`);
const authController = require(`./frontend/authController`);

/* Controllers Backend */

const dashboardBackendController = require(`./backend/dashboardController`);
const userBackendController = require(`./backend/userController`);

module.exports = { frontend: { ...errorController, ...HomeController, ...ContactController, ...AboutController, ...BlogController, ...GalleryController, ...PortfolioController, ...ServiceController, ...authController }, backend: { ...dashboardBackendController, ...userBackendController } };
