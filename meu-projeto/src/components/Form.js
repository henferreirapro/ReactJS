import {useState} from 'react'

function Form() {
    function cadastroUsuario(e) {
        e.preventDefault()//usado para parar a execução do form e executar oq esta em seguida abaixo.
        console.log(`Usuário ${name} cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label mtmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label mtmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        placeholder='Digite a sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form