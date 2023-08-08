import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Sul - Água Doce',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Sul - Água Salgada',
      corPrimaria: '#009479',
      corSecundaria: 'rgb(0 148 121 / 20%)'
    },
    {
      nome: 'Sudeste - Água Doce',
      corPrimaria: '#008BBE',
      corSecundaria: 'rgb(0 139 190 / 20%)'
    },
    {
      nome: 'Sudeste - Água Salgada',
      corPrimaria: '#4272C2',
      corSecundaria: 'rgb(65 112 191 / 20%)'
    },
    {
      nome: 'Centro-Oeste - Água Doce',
      corPrimaria: '#7F63AD',
      corSecundaria: 'rgb(126 98 172 / 20%)'
    },
    {
      nome: 'Centro-Oeste - Água Salgada',
      corPrimaria: '#C769A9',
      corSecundaria: 'rgb(199 105 169 / 20%)'
    },
    {
      nome: 'Norte - Água Doce',
      corPrimaria: '#FB7994',
      corSecundaria: 'rgb(247 119 146 / 20%)'
    },
    {
      nome: 'Norte - Salgada',
      corPrimaria: '#FF9A78',
      corSecundaria: 'rgb(254 153 120 / 20%)'
    },
    {
      nome: 'Nordeste - Água Doce',
      corPrimaria: '#FFC865',
      corSecundaria: 'rgb(253 198 100 / 20%)'
    },
    {
      nome: 'Nordeste - Salgada',
      corPrimaria: '#F9F871',
      corSecundaria: 'rgb(248 247 113 / 20%)'
    },
  ]

  const [peixes, setColaboradores] = useState ([])

  const aoNovocolaboradorAdicionado = (peixe) => {
    setColaboradores([...peixes, peixe])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={peixe => aoNovocolaboradorAdicionado(peixe)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        peixes={peixes.filter(peixe => peixe.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
