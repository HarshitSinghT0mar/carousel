export const getVisibleItemsSubset = (startIndex, items) => {
    const endIndex = (startIndex * 3 + 3) % items.length;
    const visibleItemsSubset = [];
  
    if (items.length <= 3) {
      visibleItemsSubset.push(...items);
    } else {
      if (endIndex > startIndex * 3) {
        visibleItemsSubset.push(...items.slice(startIndex * 3, endIndex));
      } else {
        visibleItemsSubset.push(...items.slice(startIndex * 3));
        const remainingItemsCount = 3 - visibleItemsSubset.length;
        visibleItemsSubset.push(...items.slice(0, remainingItemsCount));
      }
    }
  
    return visibleItemsSubset;
  };
  