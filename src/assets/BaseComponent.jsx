import RecordesTable from './components/Table/RecordesTable';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { useState } from 'react';

function BaseComponent() {
  const INITIAL_RECORDS = [
    { id: 0, date: '2025-05-25', meal: 'breakfast', content: 'Eggs + Beans', calorie: 240 },
    { id: 1, date: '2025-05-20', meal: 'breakfast', content: 'Eggs', calorie: 300 },
    { id: 2, date: '2025-05-30', meal: 'breakfast', content: ' Beans', calorie: 100 },
  ];

  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [filteredRecords, setFilteredRecords] = useState(records);
  const [key, setKey] = useState(3);

  const FormHandler = (data) => {
    const newRecord = {
      id: key,
      ...data,
      date: new Date(data.date || new Date()),
      calorie: Number(data.calorie),
    };
    const updatedRecords = [...records, newRecord];

    setRecords(updatedRecords);
    setFilteredRecords(updatedRecords);
    setKey(prev => prev + 1);
  };

  const handleFilteredData = (filtered) => {
    setFilteredRecords(filtered);
  };

  const resetFilterHandler = () => {
    setFilteredRecords(records);
  };

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
