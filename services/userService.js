const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);

module.exports.create = async (formData) => {
    let { name, email, mobile, password, verifiedAt } = formData;
    try {
        password = await bcrypt.hash(password, 10);
        email = email.toLowerCase();
        let newModel = new model({ name, email, mobile, password, verifiedAt });
        return await newModel.save();

    } catch (error) {
        throw new Error(`User Creation Failed`);
    }

}

module.exports.read = async () => {
    return await model.find({});
}
