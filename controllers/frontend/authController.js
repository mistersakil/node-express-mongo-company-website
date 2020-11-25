const { userService } = require(`../../services`);
const validator = require(`express-validator`);
const { validationResult } = validator;
const errors = {};
const formData = {};

/* registraition page */
module.exports.register = (req, res) => {
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Is Open` });
}
/* registration process */
module.exports.registrationProcess = async (req, res) => {

    let validationErrors = validationResult(req).formatWith(error => error.msg);
    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors: validationErrors, formData: req.body, singlePageTitle: `Please Fix Following Errors` });
        return false;
    }
    try {
        modelCreated = await userService.create(req.body);
    } catch (error) {
        res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `${error.message}` });
    }
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Successful` });

}

/* login page */
module.exports.login = (req, res) => {
    res.render(`frontend/user-auth/login`, { metaTitle: `Login`, singlePageTitle: `Login to Interaction` });
}
