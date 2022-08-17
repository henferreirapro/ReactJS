function Form() {
    function cadastroUsuario(e) {
        e.preventDefault()//usado para parar a execução do form e executar oq esta em seguida abaixo.
        console.log("Usuário cadastrado com sucesso!")
    }

    return(
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form