const router = require(`express`).Router();

/* Validations */
const { registrationFormValidation } = require(`./validations`);

/* Controllers Frontend */
const { frontend, backend } = require(`./controllers`);


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
router.get(`/register`, frontend.register);
router.post(`/register`, registrationFormValidation, frontend.registrationProcess);
router.get(`/login`, frontend.login);


/* Routes Backend */

router.get('/admin', backend.dashboard);
router.get('/admin/users', backend.userRead);
router.get('/admin/users/create', backend.userCreate);
router.post('/admin/users/create', registrationFormValidation, backend.userCreateProcess);


/* Routes Not Found */
router.get('/admin/*', backend.fourOfour);
router.get(`*`, frontend.fourOfour);

module.exports = router;
