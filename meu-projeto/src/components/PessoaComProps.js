function PessoaComProps(props) {

    return (
        <div>
            <h2>Nome: {props.name}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
            <img src={props.foto}></img>
        </div>
    )
}

export default PessoaComProps;