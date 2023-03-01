import { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/productsFilterSlice/productsFilterSlice';
import { selectAllDepartmentNames } from 'redux/productsSlice/productsSelectors';

const ProductFilter: FC = () => {
  const departments = useSelector(selectAllDepartmentNames);

  const dispatch = useDispatch();

  const handleSelected = (e: FormEvent<HTMLSelectElement> | undefined) => {
    dispatch(setStatusFilter(e?.currentTarget.value));
  };

  return (
    <>
      {departments.length > 0 && (
        <>
          <select
            defaultValue={'all'}
            onChange={handleSelected}
            name="departments"
          >
            <option value={'all'}>All</option>
            {departments.map(departmentName => (
              <option key={departmentName} value={departmentName}>
                {departmentName}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default ProductFilter;
