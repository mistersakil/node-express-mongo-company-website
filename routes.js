const router = require(`express`).Router();
const { viewsCommonData } = require(`./middlewares/middlewares`);

/* middlewares */

router.use(`/`, [viewsCommonData]);

/* Controllers Frontend */

const { fourOfour } = require(`./controllers/frontend/ErrorController`);
const { home } = require(`./controllers/frontend/HomeController`);
const { contact } = require(`./controllers/frontend/ContactController`);
const { about } = require(`./controllers/frontend/AboutController`);
const { blog, blogSingle } = require(`./controllers/frontend/BlogController`);
const { gallery } = require(`./controllers/frontend/GalleryController`);
const { portfolio, portfolioSingle } = require(`./controllers/frontend/PortfolioController`);
const { service, serviceSingle } = require(`./controllers/frontend/ServiceController`);


/* Routes Frontend */

router.get(`/`, home);
router.get(`/contact`, contact);
router.get(`/about`, about);
router.get(`/blog`, blog);
router.get(`/blog/single`, blogSingle);
router.get(`/gallery`, gallery);
router.get(`/portfolio`, portfolio);
router.get(`/portfolio/single`, portfolioSingle);
router.get(`/services`, service);
router.get(`/services/single`, serviceSingle);





router.get(`*`, fourOfour);



module.exports = router;
