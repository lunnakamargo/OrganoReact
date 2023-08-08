import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const tiposAgua = ['Água Doce', 'Água Salgada'];

function Formulario(props) {


    const [nome, setNome] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [imagem, setImagem] = useState('')
    const [regiao, setRegiao] = useState('')
    const [tipo, setTipo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        const calculatedTipo = regiao.includes('Salgada') ? 'Água Salgada' : 'Água Doce';
        props.aoColaboradorCadastrado({
            nome,
            tamanho,
            imagem,
            regiao,
            tipo,
        })
        setNome('')
        setTamanho('')
        setImagem('')
        setRegiao('')
        setTipo('')
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
                <ListaSuspensa
                    obrigatorio={true}
                    label="Tipo de Água"
                    itens={tiposAgua}
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario