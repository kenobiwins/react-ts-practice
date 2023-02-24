import ProductFilter from 'components/ProductsFilter/ProductsFilter';
import ProductsList from 'components/ProductsList/ProductsList';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from 'redux/productsSlice/products.operations';
import { selectAllProducts } from 'redux/productsSlice/productsSelectors';
import { AppDispatch } from 'redux/store';
import { IProductItem } from 'types/types';

const ProductsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts: IProductItem[] = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <ProductFilter />
      <ProductsList items={allProducts} />
    </>
  );
};

export default ProductsPage;
