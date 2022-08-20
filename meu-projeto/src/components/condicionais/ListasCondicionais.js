function ListasCondicionais({ itens }) {

  return (
    <>
      <h2>Lista de Itens:</h2>
      {itens.length > 0 ? (
        itens.map((item, index) => (
          <p key={index}>{item}</p>
      ))) : (
          <p>Não existem itens na Lista!</p>
      )}
    </>
  )
}

export default ListasCondicionais