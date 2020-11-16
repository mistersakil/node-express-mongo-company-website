/*  Initial values */

const viewFile = `frontend/gallery/gallery`;

const metaTitle = `Gallery`;

/* Registration page */

const gallery = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { gallery };
