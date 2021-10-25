import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';
export default function SectionTitle({ title, children }) {
    return (<section><h2 className = {styles.title}>{title}</h2> { children }</section>)
}
SectionTitle.propTypes = {
    title: PropTypes.string,
    children:PropTypes.any
}