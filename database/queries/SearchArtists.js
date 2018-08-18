const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */

function buidQuery(criteria) {
    const query = {};
    if (criteria.name) {
        query.$text = {
            $search: criteria.name
        };
    }
    if (criteria.age) {
        query.age = {
            $gte: criteria.age && criteria.age.min,
            $lte: criteria.age && criteria.age.max
        };
    }

    if (criteria.yearsActive) {
        query.yearsActive = {
            $gte: criteria.yearsActive && criteria.yearsActive.min,
            $lte: criteria.yearsActive && criteria.yearsActive.max
        };
    }
    return query;
}

module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
    console.log(criteria);
    const query = Artist
        .find(buidQuery(criteria))
        .sort({ [sortProperty]: 1 })
        .skip(offset)
        .limit(limit);

    return Promise.all([query, Artist.count()]).then((result) => {
        debugger;
        return {
            all: result[0],
            count: result[1],
            offset,
            limit
        };
    });
};
