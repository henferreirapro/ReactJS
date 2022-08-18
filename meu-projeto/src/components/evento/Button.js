import styles from './Button.module.css'

function Button(props) {
  return <button onClick={props.event} className={styles.buttonContainer} >{props.text}</button>
  //Quando o componente for retornar um unico item, podemos usalo direto sem uso das ()
}

export default Button