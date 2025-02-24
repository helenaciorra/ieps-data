/* eslint-disable @typescript-eslint/ban-types */
const debounce =
  (fn: Function, wait = 1000, time: any = null) =>
  (args: string) => {
    const filter = args;

    clearTimeout(time);

    time = setTimeout(() => fn(filter), wait);
  };

export default debounce;
