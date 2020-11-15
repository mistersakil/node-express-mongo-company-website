/*  Initial values */

const viewFile = `frontend/contact/contact`;

const metaTitle = `Contact Us`;

/* Registration page */

const contact = (req, res) => {

    res.render(viewFile, { metaTitle });

}



module.exports = { contact };
