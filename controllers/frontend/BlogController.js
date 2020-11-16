/*  Initial values */

const viewFile = `frontend/blog/blog`;

const metaTitle = `Blog`;

/* Registration page */

const blog = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { blog };
