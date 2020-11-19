module.exports.service = (req, res) => {
    res.render(`frontend/service/index`, { metaTitle: `Services`, singlePageTitle: `Service We Provide` });
}

module.exports.serviceSingle = (req, res) => {
    res.render(`frontend/service/single`, { metaTitle: `Services Single`, singlePageTitle: `Web Development` });
}
