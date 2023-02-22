import { FC, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductsDetailsPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(location?.state?.from ?? '/products');
  };
  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};
