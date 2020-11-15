const router = require(`express`).Router();

/* Controllers */

const { register, registerProcess } = require(`./controllers/RegisterController`);


/* routes for frontend */

router.get(`/`, (req, res) => {
    res.send('home page');
});



module.exports = router;
