import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (<div className = {styles.block}>
        {options.map(btn => (
          <button
            className = {styles.button}
            value={btn}
            key={btn}
            type="button"
            onClick={e => onLeaveFeedback(e)}>
            {btn}
          </button>
        ))}
      </div>)
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}