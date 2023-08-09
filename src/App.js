import React, { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Regiao from './componentes/Regiao';
import Rodape from './componentes/Rodape';


function App() {

  const regioes = [
    {
        nome: 'Sul',
        corPrimariaAguaDoce: '#57c278',
        corSecundariaAguaDoce: '#d9f7e9',
        corPrimariaAguaSalgada: '#009479',
        corSecundariaAguaSalgada: 'rgb(0 148 121 / 20%)',
    },
    {
        nome: 'Sudeste',
        corPrimariaAguaDoce: '#008BBE',
        corSecundariaAguaDoce: 'rgb(0 139 190 / 20%)',
        corPrimariaAguaSalgada: '#4272C2',
        corSecundariaAguaSalgada: 'rgb(65 112 191 / 20%)',
    },
    {
        nome: 'Centro-Oeste',
        corPrimariaAguaDoce: '#7F63AD',
        corSecundariaAguaDoce: 'rgb(126 98 172 / 20%)',
        corPrimariaAguaSalgada: '#C769A9',
        corSecundariaAguaSalgada: 'rgb(199 105 169 / 20%)',
    },
    {
        nome: 'Norte',
        corPrimariaAguaDoce: '#FB7994',
        corSecundariaAguaDoce: 'rgb(247 119 146 / 20%)',
        corPrimariaAguaSalgada: '#FF9A78',
        corSecundariaAguaSalgada: 'rgb(254 153 120 / 20%)',
    },
    {
        nome: 'Nordeste',
        corPrimariaAguaDoce: '#FFC865',
        corSecundariaAguaDoce: 'rgb(253 198 100 / 20%)',
        corPrimariaAguaSalgada: '#F9F871',
        corSecundariaAguaSalgada: 'rgb(248 247 113 / 20%)',
    },
];

const tiposAgua = ['Água Doce', 'Água Salgada'];

const [peixes, setPeixes] = useState([]);

const aoNovoPeixeAdicionado = (peixe) => {
    setPeixes([...peixes, peixe]);
};

return (
    <div className="App">
        <Banner />
        <Formulario
            regioes={regioes.map(regiao => regiao.nome)}
            tiposAgua={tiposAgua}
            aoPeixeCadastrado={peixe => aoNovoPeixeAdicionado(peixe)}
        />
        {regioes.map(regiao => (
            <React.Fragment key={regiao.nome}>
                <Regiao
                    nome={`${regiao.nome} - Água Doce`}
                    corPrimaria={regiao.corPrimariaAguaDoce}
                    corSecundaria={regiao.corSecundariaAguaDoce}
                    peixes={peixes.filter(peixe => peixe.regiao === regiao.nome && peixe.tipo === 'Água Doce')}
                />
                <Regiao
                    nome={`${regiao.nome} - Água Salgada`}
                    corPrimaria={regiao.corPrimariaAguaSalgada}
                    corSecundaria={regiao.corSecundariaAguaSalgada}
                    peixes={peixes.filter(peixe => peixe.regiao === regiao.nome && peixe.tipo === 'Água Salgada')}
                />
            </React.Fragment>
        ))}
        <Rodape />
    </div>
);
}

export default App;
