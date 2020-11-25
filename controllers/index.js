/* Controllers Frontend */

const errorController = require(`./frontend/errorController`);
const homeController = require(`./frontend/homeController`);
const contactController = require(`./frontend/contactController`);
const aboutController = require(`./frontend/aboutController`);
const blogController = require(`./frontend/blogController`);
const galleryController = require(`./frontend/galleryController`);
const portfolioController = require(`./frontend/portfolioController`);
const serviceController = require(`./frontend/serviceController`);
const authController = require(`./frontend/authController`);

/* Controllers Backend */

// const dashboardBackendController = require(`./backend/dashboardController`);
// const userBackendController = require(`./backend/userController`);

module.exports = {
    frontend: { ...errorController, ...homeController, ...contactController, ...aboutController, ...blogController, ...galleryController, ...portfolioController, ...serviceController, ...authController }
};
