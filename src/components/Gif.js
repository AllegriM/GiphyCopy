import { Link } from "wouter"

export const Gif = ( {src, data} ) => {

    return (
        <div className='image_container'>
            <Link to={`/gif/${data.id}`} >
                <img src={src} alt="imagen de meme" className="gif_image"/>
            </Link>
        </div>
    )
}
