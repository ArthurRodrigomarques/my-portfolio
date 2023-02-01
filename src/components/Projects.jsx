import React from 'react'

import infinitePrint from "../img/infiniteprint.png"
import pokedexprint from "../img/pokedexprint.png"
import siteStreamingprint from "../img/siteStreamingprint.png"
import taleprint from "../img/taleprint.png"

import {BsLink45Deg} from "react-icons/bs"

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1>Principais Projetos</h1>
        <div className="all-projects">

          <div className='projetos'>
            <h3>INfinite LOOP</h3>
            <img src={infinitePrint} />
            <p>Tecnologias usadas: HTML, CSS e JavaScript</p>
            <a  href="https://arthurrodrigomarques.github.io/InfiniteLoop/" target="_blank" ><BsLink45Deg size={20}/>Ver Projeto</a>
          </div>

          <div className='projetos'>
            <h3>TALE PURPLE</h3>
            <img src={taleprint} />
            <p>Tecnologias usadas: HTML e CSS</p>
            <a href="https://arthurrodrigomarques.github.io/tale/" target="_blank"><BsLink45Deg size={20}/>Ver Projeto</a>
          </div>

            
          <div className='projetos'>
            <h3>POKEDEX</h3>
            <img src={pokedexprint} />
            <h4>Desenvolvido em volta da API:Pokeapi trazendo todas suas funcionalidades no site</h4>
            <p>Tecnologias usadas: HTML, CSS, ReactJS e JSX</p>
            <a href="https://pokedex-pi-lime-17.vercel.app/" target="_blank"><BsLink45Deg size={20}/> Ver Projeto</a>
          </div>

          

          <div className='projetos'>
            <h3>CLONE DA NETFLIX</h3>
            <p></p>
            <img src={siteStreamingprint} />
            <h4>Desenvolvido em volta da API:TMDB trasendo diversos filmes que estão em alta</h4>
            <p>Tecnologias usadas: HTML, CSS, ReactJS e JSX</p>
            <a href="https://site-de-streaming.vercel.app/" target="_blank"><BsLink45Deg size={20}/>  Ver Projeto</a>
          </div>
        </div>


        </div>
  
  )
}

export default Projects