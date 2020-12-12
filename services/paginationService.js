const { user: model } = require(`../models`);

module.exports.paginationCount = async (filterParams = {}) => {
    let result = {};
    let perPage = 10;
    let currentPage = 1;
    if (filterParams.currentPage) {
        currentPage = filterParams.currentPage;
        delete filterParams.currentPage;
    }
    let totalDocuments = await model.countDocuments(filterParams);
    let pages = [];
    let totalPages = Math.ceil(totalDocuments / perPage);

    if (totalPages >= 1 && totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else if (totalPages > 10) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            if (i < currentPage && i < 1) {
                pages.push(i + 5);
            } else if (i > totalPages) {
                pages.push(i - 5);
            } else {
                pages.push(i);
            }
        }

    }

    result.links = pages.sort((a, b) => a - b);
    result.totalPages = totalPages;
    result.first = 1;
    result.last = totalPages;
    return result;




}
