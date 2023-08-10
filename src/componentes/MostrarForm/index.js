import './MostrarForm.css'
import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Botao from '../Botao';

function MostrarForm({ children }) {

    const [mostrar, setMostrar] = useState(false);


    function botaoMostrar() {
        console.log('oi');
        setMostrar(!mostrar);
    }
    var infoMostrar = mostrar ? <AiFillPlusCircle /> : <AiFillPlusCircle />;

    return (
        <div className="mostrar">
            {mostrar && children}
            <Botao onClick={botaoMostrar} type={infoMostrar} className={'botaoMostra'}/>
        </div>
    );
}

export default MostrarForm
