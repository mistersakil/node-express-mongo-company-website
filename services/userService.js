const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);

module.exports.create = async (formData) => {
    let { name, email, mobile, password } = formData;
    try {
        password = await bcrypt.hash(password, 10);
        let newModel = new model({ name, email, mobile, password });
        return await newModel.save();

    } catch (error) {
        throw new Error(`User Creation Failed`);
    }

}

module.exports.read = async () => {
    return await model.find({});
}
