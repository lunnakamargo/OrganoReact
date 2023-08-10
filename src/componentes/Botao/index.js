import './Botao.css'

const Botao = ({type = 'text', onClick, className}) => {
    return <button className={`botao ${className}`} onClick={onClick}>
        {type}
    </button>
}

export default Botao