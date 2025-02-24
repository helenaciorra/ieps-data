const getUnit = (fileSize: number): string => {
  if (fileSize < 1000) {
    return 'b';
  }

  if (fileSize < 1000000) {
    return 'kb';
  }

  if (fileSize < 1000000000) {
    return 'mb';
  }

  return 'gb';
};

const getSize = (fileSize: number): number => {
  if (fileSize < 1000) {
    return fileSize;
  }

  if (fileSize < 1000000) {
    return fileSize / 1000;
  }

  if (fileSize < 1000000000) {
    return fileSize / 1000000;
  }

  return fileSize / 1000000000;
};

export const sizeUnit = (fileSize: number): string => {
  const unit = getUnit(fileSize);
  const size = Number(getSize(fileSize)).toFixed(2);

  return `${size} ${unit}`;
};

export default sizeUnit;
