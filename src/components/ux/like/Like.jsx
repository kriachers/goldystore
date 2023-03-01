
import { useState } from "react";
import React from "react";
import {AppContext} from "../../../App"


function Like(props) {
    const {favorites, setFavorites} = React.useContext(AppContext)

    const [isLiked, setLiked] = useState(false)

    function likeItem(item) {
            if (favorites.find((elem) => item.id === elem.id))
            {
                setFavorites(
                    favorites.filter(elem => elem.id !== item.id)
                  );      
            } else {
                setFavorites([...favorites, item]);
            }     
    }


    return (
        <div>
            <svg 
            onClick={() => likeItem(props.item)}  
            className={`sale__stickers-like svg-icon ${(favorites.find((elem) => props.item.id === elem.id)) ? 'active' : ''}`} 
            width="24" height="24" viewBox="0 0 24 24" fill="#C9C9C9" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.39995C1.99975 6.95029 2.58239 5.5614 3.61681 4.54578C4.65124 3.53016 6.05058 2.97311 7.5 2.99995C9.21732 2.99083 10.856 3.71913 12 4.99995C13.144 3.71913 14.7827 2.99083 16.5 2.99995C17.9494 2.97311 19.3488 3.53016 20.3832 4.54578C21.4176 5.5614 22.0002 6.95029 22 8.39995C22 13.756 15.621 17.8 12 21C8.387 17.773 2 13.76 2 8.39995Z" />
            </svg>
    </div>
    );
}

export default Like;