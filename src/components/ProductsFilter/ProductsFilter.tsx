import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectAllDepartmentNames } from 'redux/productsSlice/productsSelectors';

const ProductFilter: FC = () => {
  const departments = useSelector(selectAllDepartmentNames);

  return (
    <>
      {departments.length > 0 && (
        <form>
          <select name="departments">
            {departments.map(departmentName => (
              <option key={departmentName} value={departmentName}>
                {departmentName}
              </option>
            ))}
          </select>
        </form>
      )}
    </>
  );
};

export default ProductFilter;
