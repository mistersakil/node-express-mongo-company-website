const router = require(`express`).Router();

/* Controllers Frontend */

const { home } = require(`./controllers/frontend/HomeController`);
const { contact } = require(`./controllers/frontend/ContactController`);
const { about } = require(`./controllers/frontend/AboutController`);
const { fourOfour } = require(`./controllers/frontend/ErrorController`);


/* Routes Frontend */

router.get(`/`, home);
router.get(`/contact`, contact);
router.get(`/about`, about);
router.get(`*`, fourOfour);



module.exports = router;
