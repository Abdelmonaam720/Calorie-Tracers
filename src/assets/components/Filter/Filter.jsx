import { useState } from 'react';
import styles  from '../../Styles/Filter.module.css';

function Filter({ fullData, onFilter, onClear }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value !== '') {
      const filtered = fullData.filter(item => {
        const itemDate = new Date(item.date).toISOString().split('T')[0];
        return itemDate === value;
      });
      onFilter(filtered);
    }
  };

  return (
    <div className={styles.Filter}>
      <label htmlFor='FilterInput'>Filter by date: </label>
      <input type="date" value={searchTerm} onChange={handleInputChange} />
      <button onClick={onClear}> Clear Filter </button>
    </div>
  );
}

export default Filter;
