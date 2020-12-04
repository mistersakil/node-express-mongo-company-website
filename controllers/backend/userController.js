const { userService } = require(`../../services`);
const validator = require(`express-validator`);
const { usersJson } = require(`../../lang`);
const topLinks = { create: `/admin/users/create`, read: `/admin/users` };
const { validationResult } = validator;
const errors = {};
const formData = {};
let success = false;


/* Read all */
module.exports.userRead = async (req, res) => {
    let models = [];
    console.log(req.body);
    try {
        models = await userService.read(req.body);
    } catch (error) {
        res.render(`backend/users/users`, { metaTitle: `Users-Error`, models, formData: req.body, singlePageTitle: `User List`, ...usersJson });
        return;
    }

    res.render(`backend/users/users`, { metaTitle: `Users`, models, formData: req.body, singlePageTitle: `User List`, ...usersJson });
}


/* Create form */
module.exports.userCreate = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...usersJson });
}

/* Create process */

module.exports.userCreateProcess = async (req, res) => {

    let validationErrors = validationResult(req).formatWith(error => error.msg);
    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`backend/users/create`, { metaTitle: `Create New User`, errors: validationErrors, success, formData: req.body, ...usersJson });
        return false;
    }
    try {
        let modelCreated = await userService.create({ ...req.body, verifiedAt: Date.now() });
    } catch (error) {
        console.log(error.message)
        res.render(`backend/users/create`, { metaTitle: `Create New User`, errors: { message: error.message }, success, formData: req.body, ...usersJson });
        return false;
    }

    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success: true, formData, ...usersJson });



}
