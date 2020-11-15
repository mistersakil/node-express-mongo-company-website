const router = require(`express`).Router();

/* Controllers */

const { register, registerProcess } = require(`./controllers/RegisterController`);


/* routes for frontend */

router.get(`/`, register);



module.exports = router;
