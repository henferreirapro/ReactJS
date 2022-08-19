import {useState} from 'react'
import styles from './Condicional.module.css'

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
  }

  function limparEmail() {
    setUserEmail("")
  }

  return(
    <div>
      <h2>Renderizando Condicional (IF)</h2>
      <form >
        <input className={styles.input} 
          type="email" placeholder="Digite o seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} 
        type="submit" onClick={enviarEmail}>Enviar E-mail</button>
        
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button className={styles.button}
            onClick={limparEmail}>Limpar E-mail</button>
          </div>
        )}
      </form>

    </div>
  )
}

export default Condicional