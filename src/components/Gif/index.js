import React from "react"
import { Link } from "wouter"

function Gif ( {src, data} ) {

    return (
        <div className='image_container'>
            <Link to={`/gif/${data.id}`} >
                <img src={src} alt="imagen de meme" className="gif_image"/>
            </Link>
        </div>
    )
}

// Todos los que estabab no los vuelvo a renderizar 
export default React.memo(Gif, (prevProps, nextProps) => {
    return (prevProps.id === nextProps.id)
})