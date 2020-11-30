const { userService } = require(`../../services`);
const validator = require(`express-validator`);
const topLinks = { create: `/admin/users/create`, read: `/admin/users` };
const { validationResult } = validator;
const errors = {};
const formData = {};
let success = false;
const userTypes = [
    { name: `Admin`, label: 9 },
    { name: `Manager`, label: 8 },
    { name: `Author`, label: 7 },
    { name: `Editor`, label: 6 },
    { name: `User`, label: 1 }
];

/* Read all */
module.exports.userRead = async (req, res) => {
    let models = [];
    try {
        models = await userService.read(req.body);
        res.render(`backend/users/users`, { metaTitle: `Users`, models, formData: req.body, ...topLinks, singlePageTitle: `User List`, userTypes });
    } catch (error) {
        res.render(`backend/users/users`, { metaTitle: `Users`, models, formData: req.body, ...topLinks, singlePageTitle: `User List`, userTypes });
    }

}


/* Create form */
module.exports.userCreate = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...topLinks });
}

/* Create process */

module.exports.userCreateProcess = async (req, res) => {

    let validationErrors = validationResult(req).formatWith(error => error.msg);
    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`backend/users/create`, { metaTitle: `Create New User`, errors: validationErrors, success, formData: req.body, ...topLinks });
        return false;
    }
    try {
        let modelCreated = await userService.create({ ...req.body, verifiedAt: Date.now() });
    } catch (error) {
        console.log(error.message)
        res.render(`backend/users/create`, { metaTitle: `Create New User`, errors: { message: error.message }, success, formData: req.body, ...topLinks });
    }

    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success: true, formData, ...topLinks });



}
