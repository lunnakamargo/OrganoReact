import Peixe from '../Peixe'
import './Time.css'

const Time = (props) => {
    const primaria = {borderColor: props.corPrimaria}
    const secundaria = {backgroundColor: props.corSecundaria}


    return (
        (props.peixes.length > 0) ? 
        <section className='time' style={secundaria} >
            <h3 style={primaria}>{props.nome}</h3>
            <div className='peixes'>
                {props.peixes.map(peixe => <Peixe 
                    key={peixe.nome} 
                    nome={peixe.nome} 
                    cargo={peixe.cargo} 
                    imagem={peixe.imagem}
                    corFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time