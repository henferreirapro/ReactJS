import './App.css';
import SayMyName from './components/SayMyName';
import PessoaComProps from './components/PessoaComProps';
import PessoaSemProps from './components/PessoaSemProps';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <Frase />
      
      <section>
        <PessoaSemProps
          nome="Livannia"
          id="24"
          profi="Futura Advogada"
          foto="https://via.placeholder.com/100"
        />
      </section>
      <section>
        <PessoaComProps 
          name="Henrique"
          idade="27"
          profissao="Dev"
          foto="https://via.placeholder.com/100" 
        />
      </section>
    </div>
    
  );
}

export default App;