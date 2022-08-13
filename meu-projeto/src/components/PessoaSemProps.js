function PessoaSemProps({nome, id, profi, foto}) {
    
    return(
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {id}</p>
            <p>Profissão: {profi}</p>
            <img src={foto}></img>
        </div>
    )
    
}

export default PessoaSemProps;