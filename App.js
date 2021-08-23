import React, {useState} from 'react';
import {Text, View } from 'react-native';
import styled from 'styled-components';

const Tela = styled.View`
  flex: 1;
`
const Cabeçalho = styled.View`
  background-color: #7FFFD4;
  height: 65px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`
const Busca = styled.TextInput`
  color: #FFF;
  font-size: 20px;
`

const Botao = styled.TouchableOpacity`

`
const BuscaImagem = styled.Image`
  width: 30px;
  height: 30px;
`

export default function App() {
  const [nome, alteraNome] = useState('');
  return (
    <Tela>
      <Cabeçalho>
        <Busca placeholder="Digite o nome do filme..." value= {nome} onChangeText= { (filme) => (alteraNome)}/>
        <Botao>
          <BuscaImagem source= {require('./assets/icons8-search-24.png')}/>
        </Botao>
      </Cabeçalho>
    </Tela>
  );
};

