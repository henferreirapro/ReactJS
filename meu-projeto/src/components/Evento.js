import Button from "./evento/Button"
import styles from './evento/Button.module.css'

function Evento() {
    function primeiroEvento() {
        console.log("Primeiro evento ativado!")
    }

    function segundoEvento() {
        console.log("Segundo evento ativado!")
    }

    return(
        <div>
            <h2>Clique para disparar o evento:</h2>
            <div className={styles.direction}>
                <Button event={primeiroEvento} text="Primeiro Evento" />
                <Button event={segundoEvento} text="Segundo Evento" />
            </div>
        </div>
    )
}

export default Evento