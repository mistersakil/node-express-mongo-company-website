const { userService } = require(`../../services`);
const topLink = { create: `/admin/users/create`, read: `/admin/users` };
module.exports.userRead = async (req, res) => {
    let models = await userService.read({});
    res.render(`backend/users/index`, { metaTitle: `Users`, models, ...topLink });
}


module.exports.userCreate = async (req, res) => {
    let models = await userService.read({});
    res.render(`backend/users/create`, { metaTitle: `Create New User`, ...topLink });
}
module.exports.userCreateProcess = async (req, res) => {
    console.log(req.body);
    res.render(`backend/users/create`, { metaTitle: `Creating New User`, ...topLink });
}
