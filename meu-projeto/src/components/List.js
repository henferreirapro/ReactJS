import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha Lista:</h1>
            <ul>
                <Item marca="Nike" />
                <Item marca="Adidas" />
                <Item marca="Samsung" />
            </ul>
        </>
    )
}

export default List;