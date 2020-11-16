const router = require(`express`).Router();

/* Controllers Frontend */

const { home } = require(`./controllers/frontend/HomeController`);
const { contact } = require(`./controllers/frontend/ContactController`);
const { about } = require(`./controllers/frontend/AboutController`);
const { blog } = require(`./controllers/frontend/BlogController`);
const { portfolio } = require(`./controllers/frontend/PortfolioController`);
const { fourOfour } = require(`./controllers/frontend/ErrorController`);


/* Routes Frontend */

router.get(`/`, home);
router.get(`/contact`, contact);
router.get(`/about`, about);
router.get(`/blog`, blog);
router.get(`/portfolio`, portfolio);
router.get(`*`, fourOfour);



module.exports = router;
