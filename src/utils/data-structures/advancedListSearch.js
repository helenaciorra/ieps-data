const getProperty = (object, key = '') => {
  const path = key.split('.');

  let objectPath = object;
  path.forEach((pathKey) => {
    objectPath = objectPath[pathKey];
  });

  return objectPath || '';
};

const itemContainsQueryKey = (item, query, metadata) => (key) => {
  let itemValueKey = key;
  if (metadata && metadata[key] && metadata[key].key) {
    itemValueKey = metadata[key].key;
  }

  const itemValue = `${getProperty(item, itemValueKey)}`
    .toString()
    .toLowerCase();
  const queryValue = `${query[key] || ''}`.toString().toLowerCase();

  if (!metadata || !metadata[key] || itemValue == null || queryValue == null) {
    return itemValue.includes(queryValue);
  }

  if (metadata[key].oneOfKeys) {
    return metadata[key].oneOfKeys
      .map((keyEntry) => getProperty(item, keyEntry))
      .some((entry) => entry.includes(queryValue));
  }

  if (itemValue === '' || queryValue === '') {
    return itemValue.includes(queryValue);
  }

  if (metadata[key].exact) {
    return itemValue === queryValue;
  }

  if (
    metadata[key].greater &&
    itemValue != null &&
    queryValue != null &&
    itemValue !== '' &&
    queryValue !== ''
  ) {
    const numericItemValue = +itemValue
      .replace(/,/g, '.')
      .replace(/[^0-9.]/g, '');
    const queryValueValue = +queryValue
      .replace(/,/g, '.')
      .replace(/[^0-9.]/g, '');

    return numericItemValue >= queryValueValue;
  }

  return itemValue.includes(queryValue);
};

const filterSearchList = (list, query, { exact, metadata }) =>
  list.filter(function (item) {
    const queryKeys = Object.keys(this);
    if (exact) {
      return queryKeys.every(itemContainsQueryKey(item, this, metadata));
    } else {
      return queryKeys.some(itemContainsQueryKey(item, this, metadata));
    }
  }, query);

const advancedListSearch = (list = [], query = {}, options) => {
  const { exact = true, unique, metadata } = options || {};

  const filteredSearchList = filterSearchList(list, query, { exact, metadata });

  if (unique) {
    return filteredSearchList[0] || {};
  } else {
    return filteredSearchList;
  }
};

export default advancedListSearch;
