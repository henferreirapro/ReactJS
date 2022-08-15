import styles from './Pessoa.module.css'

function PessoaComProps(props) {

    return (
        <section className={styles.section}>
            <h2>Nome: {props.name}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
            <img src={props.foto} className={styles.img}></img>
        </section>
    )
}

export default PessoaComProps;