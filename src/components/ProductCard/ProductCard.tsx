import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProductItem } from 'types/types';

interface IPropsProductCard {
  item: IProductItem;
  location: {
    state: {
      from?: {
        hash: string;
        key: string;
        pathname: string;
        search: string;
        state: null;
      };
    };
  };
}

const ProductCard: FC<IPropsProductCard> = ({ item, location }) => {
  return (
    <li>
      <Link to={`/products/${item.id}`} state={{ from: location }}>
        <img src={item.image} alt={item.name} />
        <h2> {item.name}</h2>
        <h3>{item.department}</h3>
        <p>{item.product}</p>
        <p>{item.price}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
