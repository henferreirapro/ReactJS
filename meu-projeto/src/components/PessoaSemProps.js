import styles from './Pessoa.module.css'

function PessoaSemProps({nome, id, profi, foto}) {
    
    return(
        <section className={styles.section}>
            <h2>Nome: {nome}</h2>
            <p>Idade: {id}</p>
            <p>Profissão: {profi}</p>
            <img src={foto} className={styles.img}></img>
        </section>
    )
    
}

export default PessoaSemProps;