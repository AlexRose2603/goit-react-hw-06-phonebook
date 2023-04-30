import { FilterForm, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'store/Filters/slice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const onFilter = filter => {
    dispatch(filterContacts(filter.target.value));
  };
  return (
    <FilterForm>
      <Input
        name="filter"
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={onFilter}
      ></Input>
    </FilterForm>
  );
};
