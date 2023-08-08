import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const primaria = {borderColor: props.corPrimaria}
    const secundaria = {backgroundColor: props.corSecundaria}


    return (
        (props.colaboradores.length > 0) ? 
        <section className='time' style={secundaria} >
            <h3 style={primaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time