import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {
    const [is_hovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)

    const is_in_cart = cartItems.filter(item => item.id === img.id).length > 0

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
    let plusIcon = null
    if (is_in_cart) {
        plusIcon = <i className='ri-shopping-cart-fill cart'
                      onClick={() => removeFromCart(img.id)}
                   ></i>
    } else {
        plusIcon = is_hovered && <i className='ri-add-circle-line cart'
                                    onClick={() => addToCart(img)}
                                ></i>    
    }

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