const { dateFormat } = require(`../utils/helpers`);

const redirectToLoginPage = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return next();
    }
    return res.redirect(`/login`);
}
const redirectToAdminPage = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect(`/admin`);
    }
    return next();
}

const dataForAllViews = (req, res, next) => {
    // const { isLoggedIn, user } = req.session;
    res.locals = {
        dateFormat,
        singlePageTitle: null,

    }
    return next();
}
module.exports = { redirectToLoginPage, redirectToAdminPage, dataForAllViews }
