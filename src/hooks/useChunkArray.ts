import { IProductItem } from 'types/types';

const useChunkArray = (array: IProductItem[], chunkSize = 1) => {
  const newArr = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    newArr.push(chunk);
  }
  return newArr;
};

export { useChunkArray };
