import PropTypes from 'prop-types';
import { FilterForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'store/Filters/actions';
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
