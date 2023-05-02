import { FilterForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'store/Filters/selectors';
import { filterContacts } from 'store/Filters/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  const onFilter = filter => {
    dispatch(filterContacts(filter.target.value));
  };
  return (
    <FilterForm>
      <Input
        name="filter"
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={onFilter}
      ></Input>
    </FilterForm>
  );
};
