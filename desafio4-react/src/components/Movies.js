import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyApi = axios.create ({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=013f3ed7712c1d13c2b965b97a8cfa5b&language=pt-BR'
})
export default class Movies extends React.Component {
  state = {
    moviesLista: []
  }
  getApi = async () => {
    const pegandoApi = await MyApi.get()

    const infoFilmes = pegandoApi.data.results.map((item) => {
      return{
        nome: item.title,
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })

    this.setState({ moviesLista: infoFilmes })
  }

  componentDidMount (){
    this.getApi();
  }

  render(){
    return(
      <>
      {this.state.moviesLista.map((item) => (
        
        <>
        <h2>{item.nome}</h2>
        <p>{item.sinopse}</p>
        <img src={item.imagem} />
        </>

      ))}
      </>
    )
  }
}