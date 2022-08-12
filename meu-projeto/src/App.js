import './App.css';

function App() {
  const name = 'Henrique';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a+b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá {name}.</p>
      <p>Seu nome em maiúsculo: {newName}.</p>
      <p>A soma é: {sum(1, 2)}.</p>
      <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;
