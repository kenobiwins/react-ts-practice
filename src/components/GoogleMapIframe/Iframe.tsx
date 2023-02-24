import { FC, useRef, useEffect } from 'react';
import { containerStyle } from './setting';

const Iframe: FC = () => {
  const mapRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    return () => {
      onUnmount();
    };
  }, []);

  const onUnmount = (): void => {
    mapRef.current = null;
  };

  return (
    <iframe
      ref={mapRef}
      title="Address"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.787090400351!2d30.524563330799452!3d50.44506631382411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5485437bc9%3A0x7c34bc2fd523fcce!2z0YPQuy4g0JHQsNC90LrQvtCy0LDRjywg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1677187482611!5m2!1sru!2sua"
      width="600"
      height="450"
      style={containerStyle}
      loading="lazy"
    ></iframe>
  );
};

export default Iframe;
