import ProductCard from 'components/ProductCard/ProductCard';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IProductItem } from 'types/types';

import { Pagination, A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useChunkArray } from 'hooks/useChunkArray';

import 'swiper/css';
import 'swiper/css/navigation';

interface IPropFeatureTopicSection {
  title: string;
  items: IProductItem[];
}

const FeatureTopicSection: FC<IPropFeatureTopicSection> = ({
  title,
  items,
}) => {
  const location = useLocation();
  const chunkedItems = useChunkArray(items, 5);

  return (
    <section>
      <div>
        <h2>{title}</h2>
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          navigation
          effect={'flip'}
          speed={800}
          slidesPerView={1}
        >
          {chunkedItems.map((itemsGroup, i) => {
            return (
              <SwiperSlide key={i}>
                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5,1fr)',
                    gridTemplateRows: 'auto',
                    gap: 12,
                  }}
                >
                  {itemsGroup.map(item => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      location={location}
                    />
                  ))}
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureTopicSection;
