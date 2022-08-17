function Evento({ numero}) {
    function meuEvento() {
        console.log(`Evento ${numero} ativado`)
    }

    return(
        <div>
            <h2>Clique para disparar o evento:</h2>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento