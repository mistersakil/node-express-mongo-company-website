/* Dashboard */
module.exports.dashboard = (req, res) => {
    res.render(`backend/dashboard/index`, { metaTitle: `Dashboard` });
}
/* 404 */
module.exports.fourOfour = (req, res) => {
    res.render(`backend/error/404`, { metaTitle: `404` });
}
