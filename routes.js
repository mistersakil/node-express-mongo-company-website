const router = require(`express`).Router();
router.get(`/`, (req, res) => {
    res.send(`Hello home page, how are you?`);
});
module.exports = router;
