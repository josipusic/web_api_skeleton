import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {
    const [is_hovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    let heartIcon = null
    if (img.isFavorite) {
        heartIcon = <i  className='ri-heart-fill favorite'
                        onClick={() => toggleFavorite(img.id)}
                    ></i>
    } else {
        heartIcon = is_hovered && <i
                                      className='ri-heart-line favorite'
                                      onClick={() => toggleFavorite(img.id)}
                                  ></i>
    }

    const plusIcon = is_hovered && <i className='ri-add-circle-line cart'></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon} {plusIcon}
        </div>
    )
}

export default Image