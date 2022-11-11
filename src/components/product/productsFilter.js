// this function expects 3 arguments:
// productsArray
// setFilteredFunc (used to broadcast the results of the sear)
// search (string currently found in the searchbox )

export const productsFilter = (producstArray, setFilteredFunc, searchFunc) => {
  let list_of_ids = [];
  let finalList = [];

  // filter per key
  const title = producstArray.filter(el => {
    return el.title.toLowerCase().includes(searchFunc.toLowerCase());
  });

  const weight = producstArray.filter(el => {
    return el.weight
      .toString()
      .toLowerCase()
      .includes(searchFunc.toLowerCase());
  });
  const price = producstArray.filter(el => {
    return el.price.toString().toLowerCase().includes(searchFunc.toLowerCase());
  });
  const description = producstArray.filter(el => {
    return el.description.toLowerCase().includes(searchFunc.toLowerCase());
  });

  // eliminate duplicates
  const trimDuplicates = arr => {
    arr.forEach(item => {
      if (!list_of_ids.includes(item._id)) {
        list_of_ids.push(item._id);
        finalList.push(item);
      }
    });
  };

  trimDuplicates(title);
  trimDuplicates(weight);
  trimDuplicates(price);
  trimDuplicates(description);

  setFilteredFunc(finalList);
};
