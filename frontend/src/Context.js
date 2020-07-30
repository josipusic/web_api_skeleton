import React, {useState, useEffect}  from 'react'

const Context = React.createContext()


function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevCartItems => [...prevCartItems, newItem])
    }

    function removeFromCart(id) {
        const updatedCart = cartItems.filter(item => item.id !== id)
        setCartItems(updatedCart)
    }

    return (
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, setCartItems}}>
            {children}
        </Context.Provider>
        
    )
}

export {Context, ContextProvider}