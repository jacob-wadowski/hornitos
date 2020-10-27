import styles from './service.module.css'
import Button from '@material-ui/core/Button'

export default function Service({ name, cost }) {
  return (
    <section className={styles.row}>
      <div className={styles.serviceName}>{name}</div>
      <div className={styles.serviceCost}>{cost}</div>
      <Button variant='contained' color='primary'>Add</Button>
    </section>
  )
}