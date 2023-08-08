import './Peixe.css'

const Peixe = ({nome, imagem, cargo, corFundo}) => {

    const primaria = {backgroundColor: corFundo}

    return (
        <div className='peixe'>
            <div className='cabecalho' style={primaria}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )

}

export default Peixe