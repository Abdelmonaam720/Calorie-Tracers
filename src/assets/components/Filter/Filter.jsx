import { useState } from 'react';
import styles  from '../../Styles/Filter.module.css';

function Filter({ fullData, onFilter, onClear }) {

  // 'searchTerm' Are Repository For Storage The Date That Will Filter Records At The Same Date
  const [searchTerm, setSearchTerm] = useState('');

  //When Input has Changed will get Value which search it in records then do filter then send it to 'BaseComponents'
  const handleInputChange = (e) => {
    
    // set search value
    const value = e.target.value;
    setSearchTerm(value);


    if (value !== '') {
      // filter Records to return only equal search date
      const filtered = fullData.filter(item => {
        // covert Dates from records to string as this way 'dd-mm-yyy'
        const itemDate = new Date(item.date).toISOString().split('T')[0];
        return itemDate === value;
      });

      // sending Filterd data to 'BaseComponents'
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
