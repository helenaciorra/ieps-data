export const urlQueryParams = (queryParamsObj) =>
  Object.keys(queryParamsObj)
    .map((key) => `${key}=${queryParamsObj[key]}`)
    .join('&');
