import styles from '../../Styles/Table.module.css';

function Record(props) {

  const { Records } = props;

  return(
    <>
      {Records.map((record) => {

        const isMealInvalid = record.meal.length <= 1;
        const isContentInvalid = record.content.length <= 1;

        const validValues = (isMealInvalid || isContentInvalid) ?
         (<td className={styles['invalid-cell']} colSpan={3}>INVALID</td>):
         (<><td>{record.meal}</td><td>{record.content}</td><td>{record.calorie}</td></>);

          return (
            <tr key={record.id}>
              <td>{new Date(record.date).toISOString().split('T')[0]}</td>
              {validValues}
            </tr>
          );
        })
      }
    </>

  )
}

export default Record;