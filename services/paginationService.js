const { user: model } = require(`../models`);

module.exports.paginationCount = async (filterParams = {}) => {
    let perPage = 10;
    let totalDocuments = await model.countDocuments(filterParams);
    let pages = [];
    let totalPages = Math.ceil(totalDocuments / perPage);

    if (totalPages >= 1 && totalPages <= 10) {

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);

        }
    } else if (totalPages > 10) {
        for (let i = 1; i <= 3; i++) {
            pages.push(i);
        }
        for (let i = totalPages; i >= totalPages - 2; i--) {
            pages.push(i);
        }

    }

    return pages.sort((a, b) => a - b);
    return pages;




}
