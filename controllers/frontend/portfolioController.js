module.exports.portfolio = (req, res) => {
    res.render(`frontend/portfolio/index`, { metaTitle: `Portfolio`, singlePageTitle: `Our Creative Works` });
}

module.exports.portfolioSingle = (req, res) => {
    res.render(`frontend/portfolio/single`, { metaTitle: `Portfolio Single`, singlePageTitle: `Multipurpose Business Website` });
}
