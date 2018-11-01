exports.getQuery = (key) => {
  let query = window.location.search.substr(1);
  query = query.split('&');
  for (let i = 0; i < query.length; i++) {
    let item = query[i].split('=');
    if (item[0] === key) {
      return item[1];
    }
  }
  return null;
};
