const router = require(`express`).Router();

/* Controllers Frontend */

const { fourOfour } = require(`./controllers/frontend/ErrorController`);
const { home } = require(`./controllers/frontend/HomeController`);
const { contact } = require(`./controllers/frontend/ContactController`);
const { about } = require(`./controllers/frontend/AboutController`);
const { blog } = require(`./controllers/frontend/BlogController`);
const { gallery } = require(`./controllers/frontend/GalleryController`);
const { portfolio, portfolioSingle } = require(`./controllers/frontend/PortfolioController`);


/* Routes Frontend */

router.get(`/`, home);
router.get(`/contact`, contact);
router.get(`/about`, about);
router.get(`/blog`, blog);
router.get(`/gallery`, gallery);
router.get(`/portfolio`, portfolio);
router.get(`/portfolio/single`, portfolioSingle);





router.get(`*`, fourOfour);



module.exports = router;
