/* Controllers Frontend */

const errorController = require(`./errorController`);
const homeController = require(`./homeController`);
const contactController = require(`./contactController`);
const aboutController = require(`./aboutController`);
const blogController = require(`./blogController`);
const galleryController = require(`./galleryController`);
const portfolioController = require(`./portfolioController`);
const serviceController = require(`./serviceController`);
const userAuthController = require(`./userAuthController`);

module.exports = { ...errorController, ...homeController, ...contactController, ...aboutController, ...blogController, ...galleryController, ...portfolioController, ...serviceController, ...userAuthController };
