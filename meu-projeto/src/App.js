import './App.css';
import ListasCondicionais from './components/condicionais/ListasCondicionais';

function App() {
  const meusItens = ["React", "Flutter", "Angular"]
  
  return (
    <div className="App">
      <ListasCondicionais itens={meusItens} />
      <ListasCondicionais itens={[]} />
    </div>
  );
}

export default App;