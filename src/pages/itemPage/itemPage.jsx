

import Item from "../../components/Item/Item";
import { AppContext } from '../../App';
import React from 'react';

function ItemPage() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const {clickedItem} = React.useContext(AppContext)


    return (
        <div className="container">
        <section className="dailyProduct section container-bottom">

            <Item itemId={clickedItem.id} item={clickedItem}></Item>

        </section>
        </div>
    );
}



export default ItemPage;