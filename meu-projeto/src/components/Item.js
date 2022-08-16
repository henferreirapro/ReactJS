import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>    
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lançamento: PropTypes.number,

}

Item.defaultProps = {
    marca: 'Aguardando a Marca',
    ano_lancamento: 'Aguardando o Ano',
    
}

export default Item;