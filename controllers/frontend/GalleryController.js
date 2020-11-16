module.exports.gallery = (req, res) => {
    res.render(`frontend/gallery/index`, { metaTitle: `Gallery`, singlePageTitle: `Our Cool Snapshots` });
}
