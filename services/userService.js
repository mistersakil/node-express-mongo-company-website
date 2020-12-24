const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);
/* Delete signle document */
module.exports.delete = async id => {
    try {
        let modelDeleted = await model.deleteOne({ _id: id });
        console.log(modelDeleted.deletedCount);
        return true;
    } catch (error) {
        return false;
    }

}

/* Create new */
module.exports.create = async (formData) => {
    try {
        formData.password = await bcrypt.hash(formData.password, 10);
        formData.email = formData.email.toLowerCase();
        formData.userType != undefined ? parseInt(formData.userType) : null;
        let newModel = new model(formData);
        return newModel.save();
    } catch (error) {
        throw new Error(`User Creation Failed`);
    }

}
/* Read all */
module.exports.read = async (filterParams = {}) => {
    let perPage = 10;
    let skip = 0;
    let filterOptions = {};

    if (Object.keys(filterParams).length) {
        for (property in filterParams) {
            if (filterParams[property]) {
                filterOptions[property] = filterParams[property];
            }
        }
    }
    /* Per page selection */
    if (filterOptions.perPage && filterOptions.perPage !== `*`) {
        perPage = parseInt(filterOptions.perPage);
    }
    delete filterOptions.perPage;
    /* Skip documents */
    if (filterOptions.currentPage) {
        skip = (parseInt(filterOptions.currentPage) - 1) * perPage;
        delete filterOptions.currentPage;
    }
    /* User type selection for all */
    if (filterOptions.userType && filterOptions.userType === `*`) {
        delete filterOptions.userType;
    }

    return await model.find(filterOptions).skip(skip).limit(perPage).sort();

}
