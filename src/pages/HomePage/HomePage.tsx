import FeatureTopicSection from 'components/FeatureTopicSection/FeatureTopicSection';
// import { ProductsList } from 'components/ProductsList/ProductsList';
import { Slider } from 'components/Slider/Slider';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from 'redux/productsSlice/products.operations';
import {
  // selectAllDepartmentNames,
  // selectAllDepartmentsKeyValue,
  selectAllProducts,
  selectByDepartment,
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

  const newArrives = useSelector(selectNewArrives).slice(0, 20);
  // const allDepartments = useSelector(selectAllDepartmentNames);

  const health = useSelector(selectByDepartment('Health'));
  const tools = useSelector(selectByDepartment('Tools'));
  const books = useSelector(selectByDepartment('Books'));
  return (
    <>
      <Slider />

      {allProducts.length > 0 && (
        <>
          <FeatureTopicSection title="New Arrives" items={newArrives} />
          <FeatureTopicSection title="Health" items={health} />
          <FeatureTopicSection title="Tools" items={tools} />
          <FeatureTopicSection title="Books" items={books} />
        </>
      )}

      {/* {allProducts.length > 0 && <ProductsList items={allProducts} />} */}
    </>
  );
};
