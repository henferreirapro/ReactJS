import styles from './Pessoa.module.css'

function PessoaSemProps({nome, id, profi, foto}) {
    
    return(
        <div className={styles.section}>
            <h2>Nome: {nome}</h2>
            <p>Idade: {id}</p>
            <p>Profissão: {profi}</p>
            <img src={foto} className={styles.img}></img>
        </div>
    )
    
}

export default PessoaSemProps;