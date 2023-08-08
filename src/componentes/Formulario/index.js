import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

function Formulario(props) {


    const [nome, setNome] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [imagem, setImagem] = useState('')
    const [regiao, setRegiao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            tamanho,
            imagem,
            regiao
        })
        setNome('')
        setTamanho('')
        setImagem('')
        setRegiao('')
    }
        

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados do peixe para criar o card abaixo</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Tamanho" 
                    placeholder="Digite o tamanho do peixe"
                    valor={tamanho}
                    aoAlterado={valor => setTamanho(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />                
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Região" 
                    itens={props.regioes} 
                    valor={regiao}
                    aoAlterado={valor => setRegiao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario