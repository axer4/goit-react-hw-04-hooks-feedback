import styles from './Notifications.module.css'
export default function Notification({ message }) {
    return (<p className= {styles.paragraph}>{message}</p>)
}