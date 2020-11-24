const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);

module.exports.create = async (formData) => {
    let { name, email, mobile, password } = formData;
    try {
        password = await bcrypt.hash(password, 10);
        let newModel = new model({ name, email, mobile, password });
        let modelCreated = await newModel.save();
        return modelCreated;
    } catch (error) {
        throw new Error(`User Creation Failed`);
    }

}
