const { user: model } = require(`../../models`);

module.exports.users = async (req, res) => {
    let models = await model.find({});
    res.render(`backend/users/index`, { metaTitle: `Users`, models, create: `/admin/users/create`, list: `/admin/users` });

}
