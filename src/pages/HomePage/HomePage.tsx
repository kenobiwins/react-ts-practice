import { ProductsList } from 'components/ProductsList/ProductsList';
import { Slider } from 'components/Slider/Slider';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <Slider />
      <ProductsList />
    </>
  );
};
