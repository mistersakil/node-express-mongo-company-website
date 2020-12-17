const { user: model } = require(`../models`);

module.exports.paginationCount = async (filterParams = {}) => {
    let result = {};
    let currentPage = 1;
    let perPage = 10;
    let skip = 0;
    let filterOptions = {};


    /* Checking filter options */
    if (Object.keys(filterParams).length) {
        for (property in filterParams) {
            if (filterParams[property]) {
                filterOptions[property] = filterParams[property];
            }
        }
    }

    /* Remove current page from query */
    if (filterOptions.currentPage) {
        currentPage = filterOptions.currentPage;
        delete filterOptions.currentPage;
    }

    /* User type selection for all */
    if (filterOptions.userType && filterOptions.userType === `*`) {
        delete filterOptions.userType;
    }
    /* Per page selection */
    if (filterOptions.perPage && filterOptions.perPage !== `*`) {
        perPage = parseInt(filterOptions.perPage);
    }
    delete filterOptions.perPage;



    let totalDocuments = await model.find(filterOptions).countDocuments();
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

    result.nowShowing = `Now showing ${(currentPage*perPage) - (perPage-1)} to ${currentPage * perPage} of ${totalDocuments}` || '';
    result.links = pages.sort((a, b) => a - b);
    result.totalPages = totalPages;
    result.first = 1;
    result.last = totalPages;

    return result;
}
