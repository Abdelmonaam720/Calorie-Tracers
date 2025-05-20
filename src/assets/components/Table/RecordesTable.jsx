import Record from './Record';
import styles from '../../Styles/Table.module.css';

function RecordesTable(props) {

	return(
  <>
    <table className={styles['calories-table']}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Meal</th>
          <th>Content</th>
          <th>Calorie</th>
        </tr>
      </thead>
      <tbody>
        <Record Records={props.incomeData} />
      </tbody>
    </table>
  </>
	);
}

export default RecordesTable;