/*  Initial values */

const viewFile = `frontend/about/about`;

const metaTitle = `About Us`;

/* Registration page */

const about = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { about };
