const { user: defaultModel } = require(`../models`);

module.exports.paginationCount = async (filterParams = {}) => {
    let result = {};
    let currentPage = 1;
    let perPage = 10;
    let skip = 0;
    let filterOptions = {};
    let model = defaultModel;


    /* Checking filter options */
    if (Object.keys(filterParams).length) {
        for (property in filterParams) {
            if (filterParams[property]) {
                filterOptions[property] = filterParams[property];
            }
        }
    }
    /* Remove model from query option */
    if (filterParams.model) {
        model = filterParams.model;
        delete filterParams.model;
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
    let nowShowingFrom = (currentPage * perPage) - (perPage - 1);
    let nowShowingTo = currentPage * perPage > totalDocuments ? totalDocuments : currentPage * perPage;
    // nowShowingTo = nowShowingTo > totalDocuments ? totalDocuments : nowShowingTo;
    result.nowShowing = `Now showing ${nowShowingFrom} to ${nowShowingTo} of ${totalDocuments}` || '';
    result.links = pages.sort((a, b) => a - b);
    result.totalPages = totalPages;
    result.first = 1;
    result.last = totalPages;

    return result;
}
