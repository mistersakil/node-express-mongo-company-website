/*  Initial values */

const viewFile = `frontend/portfolio/portfolio`;

const metaTitle = `Portfolio`;

/* Registration page */

const portfolio = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { portfolio };
