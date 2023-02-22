import { useLocation, useNavigate } from 'react-router-dom';

const UseNavigateToStateFrom = () => {
  const location = useLocation();
  const navigate = useNavigate();

  navigate(location?.state?.from ?? '/products');
};

export default UseNavigateToStateFrom;
