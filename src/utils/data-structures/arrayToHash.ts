/* eslint-disable @typescript-eslint/no-explicit-any */

export const arrayToHash = <T>(
  list: any[],
  hashKey: string
): { [hashKey: string]: T } =>
  list.reduce(
    (previousValue, currentValue) => ({
      [currentValue[hashKey]]: currentValue,
      ...previousValue,
    }),
    {}
  );

export default arrayToHash;
