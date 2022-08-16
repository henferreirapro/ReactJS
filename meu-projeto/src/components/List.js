import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha Lista:</h1>
            <ul>
                <Item marca="Nike" ano_lancamento={1964} />
                <Item marca="Adidas" ano_lancamento={1949} />
                <Item marca="Samsung" ano_lancamento={1938} />
                <Item />
            </ul>
        </>
    )
}

export default List;