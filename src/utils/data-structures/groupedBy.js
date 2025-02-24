const groupedBy = (flatList, perGroup) => {
  const grouped = [];
  while (flatList.length) {
    grouped.push(flatList.splice(0, perGroup));
  }
  return grouped;
};

export default (flatList, perGroup) => {
  if (flatList.length === 0 || !perGroup) {
    return [];
  }
  return groupedBy([...flatList], perGroup);
};
