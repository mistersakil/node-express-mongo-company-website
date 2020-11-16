module.exports.blog = (req, res) => {
    res.render(`frontend/blog/index`, { metaTitle: `Blog`, singlePageTitle: `Tuts We Wrote` });
}

module.exports.blogSingle = (req, res) => {
    res.render(`frontend/blog/single`, { metaTitle: `Blog Single`, singlePageTitle: `Why should we learn React JS?` });
}
