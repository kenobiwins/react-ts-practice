import FeatureTopicSection from 'components/FeatureTopicSection/FeatureTopicSection';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { Slider } from 'components/Slider/Slider';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from 'redux/productsSlice/products.operations';
import {
  // selectAllDepartments,
  selectAllProducts,
  // selectByDepartment,
  selectNewArrives,
} from 'redux/productsSlice/productsSelectors';
import { AppDispatch } from 'redux/store';
import { IProductItem } from 'types/types';

export const HomePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts: IProductItem[] = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const newArrives = useSelector(selectNewArrives).slice(0, 5);
  // const allDepartments = useSelector(selectAllDepartments);

  // console.log(useSelector(selectByDepartment('Games')));
  // console.log(allDepartments);

  return (
    <>
      <Slider />
      {allProducts.length > 0 && (
        <FeatureTopicSection title="New Arrives" items={newArrives} />
      )}

      {allProducts.length > 0 && <ProductsList items={allProducts} />}
    </>
  );
};
