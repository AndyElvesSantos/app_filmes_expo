import React, {useState} from 'react';
import {Text, View, Image, ListView } from 'react-native';
import styled from 'styled-components';

const Tela = styled.View`
  flex: 1;
`

const Cabeçalho = styled.View`
  background-color: #7FFFD4;
  height: 85px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  margin-bottom: 10;
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

const Destaque = styled.View`
  background-color: black;
  align-items: center;
  flex: 1;
`

const Poster = styled.Image`
  height: 80%;
  width: 80%;

`

const Info = styled.View`
  background-color: #fff;
  height: 200px;
`

const Titulo = styled.Text`
  font-size: 36px;
  margin: 0 auto;
`

const Linha1 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;

`
const Linha2 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Linha3 = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;

`
const Texto = styled.Text`
  font-size: 10px;
`
export default function App() {
  const [nome, alteraNome] = useState('')
  const [filme, alteraFilme] = useState({"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane, Sam Hamm, Warren Skaaren","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"United States, United Kingdom","Awards":"Won 1 Oscar. 9 wins & 26 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.5","imdbVotes":"350,141","imdbID":"tt0096895","Type":"movie","DVD":"24 Jul 2014","BoxOffice":"$251,348,343","Production":"Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment","Website":"N/A","Response":"True"})

  const buscarFilme = async () => {
    const requisicao = await fetch()
    const resposta = await requisicao.json()
    console.log(resposta);
  }
  return (
    <Tela>
      <Cabeçalho>
        <Busca placeholder="Digite o nome do filme..." value= {nome} onChangeText= { (filme) => (alteraNome)}/>
        <Botao activeOpacity={0.5} onPress={buscarFilme}>
          <BuscaImagem source= {require('./assets/icons8-search-24.png')}/>
        </Botao>
      </Cabeçalho>
      <Destaque>
        <Poster source={{ uri: filme.Poster}} />

      </Destaque>
      <Info>
        <Titulo> Batman </Titulo>
        <Linha1>
          <Texto>Ano: {filme.Year}</Texto>
          <Texto>Duração: {filme.Runtime}</Texto>
          <Texto>País: {filme.Country}</Texto>
        </Linha1>
        <Linha2>
          <Texto>Gênero: {filme.Genre}</Texto>
          <Texto>Pontuação: {filme.imdbRating}</Texto>
        </Linha2>
        <Linha3>
          <Texto>Enredo: {filme.Plot}</Texto>
        </Linha3>
      </Info>
    </Tela>
  );
};

