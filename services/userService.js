const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);

/* Create new */
module.exports.create = async (formData) => {
    let { name, email, mobile, password, verifiedAt, userType } = formData;
    try {
        password = await bcrypt.hash(password, 10);
        let newModel = new model({ name, email: email.toLowerCase(), mobile, password, verifiedAt, userType: parseInt(userType) });
        return await newModel.save();

    } catch (error) {
        throw new Error(`User Creation Failed`);
    }

}
/* Read all */
module.exports.read = async (filterParams = {}) => {
    let totalRecords = 0;
    try {
        totalRecords = await model.countDocuments();
    } catch (error) {
        console.log(error)
    }

    let filterOptions = {};
    if (Object.keys(filterParams).length) {
        for (property in filterParams) {
            if (filterParams[property]) {
                filterOptions[property] = filterParams[property];
            }
        }
    }

    return await model.find(filterOptions).limit(totalRecords).sort();

}
