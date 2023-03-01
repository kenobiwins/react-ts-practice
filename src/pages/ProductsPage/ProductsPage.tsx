import ProductFilter from 'components/ProductsFilter/ProductsFilter';
import ProductsList from 'components/ProductsList/ProductsList';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleProducts } from 'redux/productsFilterSlice/filtersSelectors';
import { fetchAllProducts } from 'redux/productsSlice/products.operations';
import { AppDispatch } from 'redux/store';

const ProductsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const allProducts: IProductItem[] = useSelector(selectAllProducts);

  const visibleProducts = useSelector(selectVisibleProducts);
  console.log(visibleProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <ProductFilter />
      <ProductsList items={visibleProducts} />
    </>
  );
};

export default ProductsPage;
