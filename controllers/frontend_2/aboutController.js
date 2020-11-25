module.exports.about = (req, res) => {
    res.render(`frontend/about/index`, { metaTitle: `About Us`, singlePageTitle: `Who We Are?` });
}
