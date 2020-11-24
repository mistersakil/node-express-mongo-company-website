/* Controllers Frontend */

const ErrorController = require(`./frontend/ErrorController`);
const HomeController = require(`./frontend/HomeController`);
const ContactController = require(`./frontend/ContactController`);
const AboutController = require(`./frontend/AboutController`);
const BlogController = require(`./frontend/BlogController`);
const GalleryController = require(`./frontend/GalleryController`);
const PortfolioController = require(`./frontend/PortfolioController`);
const ServiceController = require(`./frontend/ServiceController`);
const authController = require(`./frontend/authController`);

module.exports = { frontend: { ...ErrorController, ...HomeController, ...ContactController, ...AboutController, ...BlogController, ...GalleryController, ...PortfolioController, ...ServiceController, ...authController } };
