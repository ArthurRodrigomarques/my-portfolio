import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


// react-icons 
import {AiFillHtml5, AiFillGithub} from "react-icons/ai"
import {FaReact} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {DiCss3, DiGit} from "react-icons/di"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <div className="skill-bx">
            <h2>Habilidades</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque veniam dolorem </p>

            <Carousel responsive={responsive} infinite={true}>
            <div>
                <AiFillHtml5 id='html' size={200}/>
                <h5>HTML</h5>
            </div>
            <div>
                <DiCss3 id='css' size={200}/>
                <h5>CSS</h5> 
            </div>
            <div>
                <TbBrandJavascript id='js' size={200}/>
                <h5>JS</h5>
            </div>
            <div>
                <FaReact id='react' size={200}/>
                <h5>REACT</h5>
            </div>
            <div>
               <DiGit id='git' size={200}/>
               <h5>GIT</h5>
            </div>
            <div>
              <AiFillGithub id='github' size={200}/>
              <h5>GITHUB</h5>
            </div>
            </Carousel>
        </div>
    </section>
  )
}

export default Skills