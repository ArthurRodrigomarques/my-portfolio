import React from 'react'

import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const footer = () => {
  return (
    <div className='footer'>
        <div className="contact">
            <p>E-mail para contato: arthurrodrigo05052004@gmail.com
            </p>
            <p>Feito por: Arthur Marques</p>
        </div>
        <div className="links">
            <a href="https://github.com/ArthurRodrigomarques" target="_blank"><AiFillGithub/> GitHub</a>
            <a href="https://github.com/ArthurRodrigomarques" target="_blank"><AiFillLinkedin/> Linkedin</a>
        </div>
    </div>
  )
}

export default footer