const User = require(`../../models/User.js`);
const bcrypt = require(`bcrypt`);
const validator = require(`express-validator`);

const { validationResult } = validator;
const errors = {};
const formData = {};
module.exports.userRegister = (req, res) => {
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Is Open` });
}

module.exports.userRegistrationProcess = async (req, res) => {

    let { name, email, mobile, password } = req.body;
    let validationErrors = validationResult(req).formatWith(error => error.msg);

    validationErrors = validationErrors.mapped();

    console.log(validationErrors);


    if (Object.keys(validationErrors).length) {
        res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors: validationErrors, formData: req.body, singlePageTitle: `Please Fix Following Errors` });
        return false;
    }

    password = await bcrypt.hash(password, 10);
    let newUser = new User({ name, email, mobile, password });
    console.log(newUser);
    let userCreated = await newUser.save();
    console.log(userCreated);
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, errors, formData, singlePageTitle: `Registration Successful` });
}


module.exports.userLogin = (req, res) => {
    res.render(`frontend/user-auth/login`, { metaTitle: `Login`, singlePageTitle: `Login to Interaction` });
}
