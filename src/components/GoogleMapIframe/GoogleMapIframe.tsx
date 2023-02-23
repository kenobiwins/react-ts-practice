import { FC, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { center, containerStyle, options } from './setting';

const GoogleMapIframe: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBkQKSS2173BPgKov629QaCCTBS_ipczqA',
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };
  const onUnmount = (): void => {
    mapRef.current = null;
  };

  return (
    <>
      {isLoaded && (
        <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            options={options as google.maps.MapOptions}
            center={center}
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </div>
      )}
    </>
  );
};

export default GoogleMapIframe;
