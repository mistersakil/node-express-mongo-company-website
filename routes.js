const router = require(`express`).Router();

/* Controllers */

const { home } = require(`./controllers/frontend/HomeController`);
const { contact } = require(`./controllers/frontend/ContactController`);


/* routes for frontend */

router.get(`/`, home);
router.get(`/contact`, contact);

router.get(`*`, (req, res) => {
    res.send(`not found`);
});


module.exports = router;
