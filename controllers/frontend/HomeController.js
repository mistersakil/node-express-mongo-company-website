/*  Initial values */

const viewFile = `frontend/home/home`;

const metaTitle = `Home`;

/* Registration page */

const home = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { home };
