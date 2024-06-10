export const removeItem = (array, item) => {
    return array.filter(i => i !== item);
  };
  
  export const closestItem = (array, item) => {
    const index = array.indexOf(item);
    if (index === -1) return null;
    return array[index + 1] || array[index - 1] || null;
  };
  