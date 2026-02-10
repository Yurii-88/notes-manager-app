import { CATEGORIES } from '../constants.js';

const FilterPanel = ({ onFilterChange }) => {
  return (
    <div className='flex gap-4 pl-2'>
      <strong>Filter by: </strong>
      {CATEGORIES.map(option => (
        <span className='flex items-center' key={option.value}>
          <input
            className='h-4 w-4 accent-green-400 rounded'
            type='checkbox'
            name={option.label}
            value={option.value}
            onChange={({ target }) => onFilterChange({ value: target.value, checked: target.checked })}
          />
          <label className='pl-1' htmlFor={option.value}>
            {option.label}
          </label>
        </span>
      ))}
    </div>
  );
};

export default FilterPanel;
