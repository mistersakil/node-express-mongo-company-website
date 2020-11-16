/*  Initial values */

const viewFile = `frontend/error/404`;

const metaTitle = `404`;

/* Registration page */

const fourOfour = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { fourOfour };
