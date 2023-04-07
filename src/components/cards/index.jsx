import React from 'react'

const Card = ({ image, title, text, btnText }) => {
    return(
        <C.Container>
            <C.ImgCard 
                src={image} 
                alt='Imagem do card'
            />
            <C.TextField>
                <h5>
                    {title}
                </h5>
                <p>
                    {text}
                </p>
                <C.Btn>{btnText}</C.Btn>
            </C.TextField>
        </C.Container>
    )
}

export default Card