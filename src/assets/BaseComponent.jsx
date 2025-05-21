import RecordesTable from './components/Table/RecordesTable';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { useState } from 'react';

function BaseComponent() {

  // Intial Value for sending it to Table
  const INITIAL_RECORDS = [
    { id: 0, date: '2025-05-25', meal: 'breakfast', content: 'Eggs + Beans', calorie: 240 },
    { id: 1, date: '2025-05-20', meal: 'breakfast', content: 'Eggs', calorie: 300 },
    { id: 2, date: '2025-05-30', meal: 'breakfast', content: ' Beans', calorie: 100 },
  ];

  // reposity to storage records coming from form or storage after filterd 
  const [records, setRecords] = useState(INITIAL_RECORDS);

  // default value for fultring is same as record, but when form add new values , filter records will get new data to as same as records 
  const [filteredRecords, setFilteredRecords] = useState(records);

  //The key prop helps React identify which items have changed, are added, or are removed. This optimization allows React to update only the necessary elements instead of re-rendering the entire list when data changes.
  const [key, setKey] = useState(3);

  const FormHandler = (data) => {
    const newRecord = {
      id: key,
      ...data,
      date: new Date(data.date || new Date()), // seting inetial value if no comming date from data 
      calorie: Number(data.calorie), // male sure value is number not string 
    };

    // set old data and adding new data
    const updatedRecords = [...records, newRecord];

    // update 'record' repositry to equale data commig from form 
    setRecords(updatedRecords);
    // update 'FilteredRecords' repositry to equale data commig from form 
    setFilteredRecords(updatedRecords);
    setKey(prev => prev + 1);
  };

  // if filter is activated will sendin filterd data to table 
  const handleFilteredData = (filtered) => setFilteredRecords(filtered)

  // to stop filter and show all data, will set filterd data as same as records data
  const resetFilterHandler = () => setFilteredRecords(records)

  return (
    <>
      <h1>Record Tracker</h1>
      <Form incomeData={FormHandler} />
      <Filter fullData={records} onFilter={handleFilteredData} onClear={resetFilterHandler} />
      <RecordesTable incomeData={filteredRecords} />
    </>
  );
}

export default BaseComponent;
