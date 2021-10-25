import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
export default function Statistics({good,neutral,bad,total,positivePercentage}) {
    // console.log(props)
    return (<>
      <ul className = {styles.list}>
        <li className = {styles.item}>Good:{good}</li>
        <li className = {styles.item}>Neutral:{neutral}</li>
        <li className = {styles.item}>Bad:{bad}</li>
        <li className = {styles.item}>Total:{total}</li>
        <li className = {styles.item}>Positive feedback:{positivePercentage}%</li>
      </ul></>)
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage:PropTypes.number
}
