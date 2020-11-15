const router = require(`express`).Router();

/* Controllers */

const { home } = require(`./controllers/HomeController`);


/* routes for frontend */

router.get(`/`, home);



module.exports = router;
