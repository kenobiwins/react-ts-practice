import ProductCard from 'components/ProductCard/ProductCard';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IProductItem } from 'types/types';

interface IPropFeatureTopicSection {
  title: string;
  items: IProductItem[];
}

const FeatureTopicSection: FC<IPropFeatureTopicSection> = ({
  title,
  items,
}) => {
  const location = useLocation();

  return (
    <section>
      <div>
        <h2>{title}</h2>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gridTemplateRows: 'auto',
            gap: 12,
          }}
        >
          {items.map(item => (
            <ProductCard key={item.id} item={item} location={location} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureTopicSection;
