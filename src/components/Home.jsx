import React from 'react'
import { useState, useEffect } from 'react'
// react-icons
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
 
  const toRotate = ["Web Developer", " Arthur Marques"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  // const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    },delta )
    return () => {clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[1]
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setText(updateText)

    // if(isDeleting) {
    //   setDelta(prevdelta => prevdelta /2)
    // } if (!isDeleting && updateText === fullText) {
    //   setIsDeleting(true)
    //   setDelta(period)
    // } else if (isDeleting && updateText === '') {
    //   setIsDeleting(false)
    //   setLoopNum(loopNum + 1)
    //   setDelta(500)
    // }
  }

  return (
    <div className='home'>
        <div className="apresentation-home">
            <div>
            <p> OLÁ, EU SOU O</p> 
            <strong className='text'>{text}</strong>
            <p>Desenvolvedor Front-end</p>
            </div>
            <div className='links-portfolio'>
                <a href="https://github.com/ArthurRodrigomarques" target="_blank"><AiFillGithub/> GitHub</a>
                <a href="https://github.com/ArthurRodrigomarques" target="_blank"><AiFillLinkedin/> Linkedin</a>
            </div>
        </div>
        <div className="me-home">
         <img src="https://via.placeholder.com/350" />
        </div>
    </div>
  )
}

export default Home 


