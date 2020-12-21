const { user: model } = require(`../../models`);
const { userService, paginationService } = require(`../../services`);
const validator = require(`express-validator`);
const { usersJson } = require(`../../lang`);
const { validationResult } = validator;
const errors = {};
const formData = {};
let success = false;


/* View all docuement */
module.exports.userRead = async (req, res) => {
    let models = [];
    let pagination = {};
    const currentPage = parseInt(req.query.page) || 1;

    /* Remove page */
    if (req.query.page) {
        delete req.query.page;
    }
    req.query.currentPage = currentPage;
    req.query.model = model;
    try {
        models = await userService.read(req.query);
        pagination = await paginationService.paginationCount(req.query);
        pagination.currentPage = currentPage;
        pagination.query = { ...req.query };
        delete pagination.query.currentPage;
        pagination.queryString = '';

        /* Checking filter options */
        if (Object.keys(pagination.query).length) {
            for (property in pagination.query) {
                pagination.queryString += `${property}=${pagination.query[property]}&`;
            }
            pagination.queryString = pagination.queryString.slice(0, (pagination.queryString.length - 1));
        }

    } catch (error) {
        res.render(`backend/users/users`, { metaTitle: `Users - Not Found`, pagination, models, formData: req.query, singlePageTitle: `User List`, ...usersJson });
        return;
    }

    res.render(`backend/users/users`, { metaTitle: `Users`, pagination, models, formData: req.query, singlePageTitle: `User List`, ...usersJson });
}


/* Create form */
module.exports.userCreate = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...usersJson });
}

/* Create process */

module.exports.userCreateProcess = async (req, res) => {
    let metaTitle = `Create New User`;
    let validationErrors = validationResult(req).formatWith(error => error.msg);
    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`backend/users/create`, { metaTitle, singlePageTitle: `Create New User - Validation Error`, errors: validationErrors, success, formData: req.body, ...usersJson });
        return false;
    }
    try {
        let modelCreated = await userService.create({ ...req.body, verifiedAt: Date.now() });
    } catch (error) {
        console.log(error.message)
        res.render(`backend/users/create`, { metaTitle, singlePageTitle: `Create New User - Creation Failed`, errors: { message: error.message }, success, formData: req.body, ...usersJson });
        return false;
    }

    res.render(`backend/users/create`, { metaTitle, errors, success: true, formData, ...usersJson });



}

/* View single document */
module.exports.userReadSingle = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...usersJson });
}
/* Update single document */
module.exports.userUpdateSingle = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...usersJson });
}
/* Delete signle document */
module.exports.userDeleteSingle = async (req, res) => {
    let models = await userService.read();
    res.render(`backend/users/create`, { metaTitle: `Create New User`, errors, success, formData, ...usersJson });
}
