const User = require(`../../models/User.js`);
const bcrypt = require(`bcrypt`);

module.exports.userRegister = (req, res) => {
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, singlePageTitle: `Registration Is Open` });
}

module.exports.userRegistrationProcess = async (req, res) => {
    let { name, email, mobile, password } = req.body;
    password = await bcrypt.hash(password, 10);
    let newUser = new User({ name, email, mobile, password });
    console.log(newUser);
    let userCreated = await newUser.save();
    console.log(userCreated);
    res.render(`frontend/user-auth/register`, { metaTitle: `Register`, singlePageTitle: `Please solve following errors` });
}


module.exports.userLogin = (req, res) => {
    res.render(`frontend/user-auth/login`, { metaTitle: `Login`, singlePageTitle: `Login to Interaction` });
}
