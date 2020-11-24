const router = require(`express`).Router();
const { viewsCommonData } = require(`./middlewares/middlewares`);
/* Validations */
const { userRegisterValidation } = require(`./validations`);

/* middlewares */
router.use(`/`, [viewsCommonData]);


/* Controllers Frontend */
const frontend = require(`./controllers/frontend`);


/* Routes Frontend */

router.get(`/`, frontend.home);
router.get(`/contact`, frontend.contact);
router.get(`/about`, frontend.about);
router.get(`/blog`, frontend.blog);
router.get(`/blog/single`, frontend.blogSingle);
router.get(`/gallery`, frontend.gallery);
router.get(`/portfolio`, frontend.portfolio);
router.get(`/portfolio/single`, frontend.portfolioSingle);
router.get(`/services`, frontend.service);
router.get(`/services/single`, frontend.serviceSingle);
router.get(`/register`, frontend.userRegister);
router.post(`/register`, userRegisterValidation, frontend.userRegistrationProcess);
router.get(`/login`, frontend.userLogin);


router.get(`*`, frontend.fourOfour);



module.exports = router;
