const portfolio = (req, res) => {

    res.render(`frontend/portfolio/index`, { metaTitle: `Portfolio` });

}

const portfolioSingle = (req, res) => {

    res.render(`frontend/portfolio/single`, { metaTitle: `Portfolio Single` });

}



module.exports = { portfolio, portfolioSingle };
