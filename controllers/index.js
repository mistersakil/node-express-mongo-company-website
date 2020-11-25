/* Controllers Frontend */

const aboutController = require(`./frontend/aboutController`);
const authController = require(`./frontend/authController`);
const blogController = require(`./frontend/blogController`);
const contactController = require(`./frontend/contactController`);
const errorController = require(`./frontend/errorController`);
const homeController = require(`./frontend/homeController`);
const portfolioController = require(`./frontend/portfolioController`);
const galleryController = require(`./frontend/galleryController`);
const serviceController = require(`./frontend/serviceController`);


module.exports = {
    frontend: { ...errorController, ...homeController, ...contactController, ...aboutController, ...blogController, ...galleryController, ...portfolioController, ...serviceController, ...authController }
};
