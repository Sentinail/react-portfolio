import React, { useContext, useState, useRef, useEffect } from 'react'
import { CardContainer, CardWrapper, Curtain } from './style'
import { styleContext } from "../../../context_providers/styleContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import LoadingComponent from '../../LoadingSkeleton/Loading'


function Card({ title, image, description, link, handleModal, iFrame, websiteLink, ps }) {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)
    const [ curtainIsActive, setCurtainIsActive ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)

    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
            el.target.classList.add("faded")

            } else if (!el.isIntersecting) {
                
            if (el.target.classList.contains("faded")) {
                observer.unobserve(el.target)   
            }
            }
        })  
        }, {threshold: 0.2});
        observer.observe(ref.current)
    }, [])
    

    return (
        <>
            <CardWrapper ref={ref} className='fade'>
                <CardContainer  onMouseLeave={() => {setCurtainIsActive(false)}} onMouseEnter={() => {setCurtainIsActive(true)}} $curtainIsActive={curtainIsActive} $secondaryColor={secondaryColor} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor} $image={image}>
                    { isLoading && <div className='loading_container'><LoadingComponent></LoadingComponent></div>  }
                    <img onLoad={() => {setIsLoading(false)}} style={{ display: isLoading ? 'none' : 'inline' }} className='portfolio_item_image' src={image} alt={title} />
                    <Curtain className='curtain' >
                        <a href={link}>
                            <FontAwesomeIcon className={"fa-2xl pointer"} icon={faGithub} />
                        </a>
                        <FontAwesomeIcon onClick={() => {handleModal(title, image, description, iFrame, websiteLink, ps)}} className={"fa-2xl pointer"} icon={faQuestionCircle}></FontAwesomeIcon>
                    </Curtain>
                </CardContainer>
            </CardWrapper>
            
        </>
    )
}

export default Card