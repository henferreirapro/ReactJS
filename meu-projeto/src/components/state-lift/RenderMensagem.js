import {useState} from 'react'

import SeuNome from './SeuNome'
import Saudacao from './Saudacao'

function RenderMensagem() {
  const [nome, setNome] = useState()

  return (
    <div>
      <h2>State Lift</h2>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default RenderMensagem