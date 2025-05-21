import styles from '../../Styles/Form.module.css';
import Modal from 'react-modal';
import { useState } from 'react';


function Form(props) {

  // Formated Date To Be 'dd-mm-yyyy' As String
  const formattedDate = (val) => val.toISOString().split('T')[0];
  const today = formattedDate(new Date());

  // Set 'Record' As Repository To Storage Data Common From Form
  const DEFULT_VALUE = {date: today, meal: '', content: '', calorie: 0};
  let [Record, setRecord] = useState(DEFULT_VALUE);

  // adding common data from inputs to repostry 'Record'
  const DateHandler = (event) => {setRecord( {...Record ,date: event.target.value} )}
  const MealHandler = (event) => {setRecord( {...Record ,meal: event.target.value} )}
  const ContnetHandler = (event) => {setRecord( {...Record ,content: event.target.value} )}
  const CalorieHandler = (event) => {setRecord( {...Record ,calorie: event.target.value} )}

  //When Submit Form Will Sending Data 'Record' To 'BaseCom...jsx' Then Reset form Fields
  const submitHandler = (event) => {
      event.preventDefault();
      props.incomeData(Record)   // sending data 
      setRecord(DEFULT_VALUE);   // to reset all fields
  }


  //Model State 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const cancelBtn = () => { setRecord(DEFULT_VALUE); closeModal();}

  return(
    <>
      <button className={styles.AddRecord} onClick={openModal}>Add New Record </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={styles.model} >
        <form className={styles['calories-form']} onSubmit={submitHandler}>
            <label className='DateInput' htmlFor="Date">Date: </label>
            <input value={Record.date} onChange={DateHandler} className='DateInput' id="Date" type="date" />

            <label className='MealInput' htmlFor="meal">meal: </label>
            <select value={Record.meal} onChange={MealHandler} className='MealInput' id="meal">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
            </select>

            <label className='ContentInput' htmlFor="content">content: </label>
            <input value={Record.content} onChange={ContnetHandler} className='ContentInput' id="content" type="text" />

            <label className='CalorieInput' htmlFor="calorie">calorie: </label>
            <input value={Record.calorie} onChange={CalorieHandler} className='CalorieInput' id="calorie" type='number' />

            <button id="AddBtn" > Add </button>
            <button type="button" id="CancelBtn" onClick={cancelBtn} > Cancel </button>
        </form>
      </Modal>
    </>
  )
}

export default Form;