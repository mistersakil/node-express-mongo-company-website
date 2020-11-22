module.exports.userRegister = (req, res) => {
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, singlePageTitle: `Registration Is Open` });
}

module.exports.userRegistrationProcess = (req, res) => {
    console.log(req.body);
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, singlePageTitle: `Please solve following errors` });
}


module.exports.userLogin = (req, res) => {
    res.render(`frontend/user-auth/login`, { metaTitle: `Login`, singlePageTitle: `Login to Interaction` });
}
