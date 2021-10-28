const takeUntil = function (array, callback) {
  const results = array.map(callback);
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (results[i] === true) {
      return array.slice(0, i);
    }
  }
};
