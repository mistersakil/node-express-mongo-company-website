const models = require(`../../models`);
const bcrypt = require(`bcrypt`);
const validator = require(`express-validator`);

const { validationResult } = validator;
const errors = {};
const formData = {};
/* user registraition page */
module.exports.userRegister = (req, res) => {
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Is Open` });
}
/* user registration process */
module.exports.userRegistrationProcess = async (req, res) => {

    let { name, email, mobile, password } = req.body;
    let validationErrors = validationResult(req).formatWith(error => error.msg);

    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors: validationErrors, formData: req.body, singlePageTitle: `Please Fix Following Errors` });
        return false;
    }

    password = await bcrypt.hash(password, 10);
    let newUser = new models.user({ name, email, mobile, password });
    let userCreated = await newUser.save();
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Successful` });
}

/* user registraition page */
module.exports.userLogin = (req, res) => {
    res.render(`frontend/user-auth/login`, { metaTitle: `Login`, singlePageTitle: `Login to Interaction` });
}
