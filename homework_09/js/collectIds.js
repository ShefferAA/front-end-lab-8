collectIds = (array) => {
    let highRate = getFilteredArray(array, (elem) => {
        return elem.rating > 3;
    });
    return getTransformedArray(highRate, elem => {
       return elem.id;
    });
};
