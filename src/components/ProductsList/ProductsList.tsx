import ProductCard from 'components/ProductCard/ProductCard';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IProductItem } from 'types/types';

interface IPropsProductList {
  items: IProductItem[];
}

export const ProductsList: FC<IPropsProductList> = ({ items }) => {
  const location = useLocation();

  return (
    <>
      {items.length > 0 && (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridTemplateRows: 'auto',
            gap: 12,
          }}
        >
          {items.map(item => {
            return (
              <ProductCard key={item.id} item={item} location={location} />
            );
          })}
        </ul>
      )}
    </>
  );
};
