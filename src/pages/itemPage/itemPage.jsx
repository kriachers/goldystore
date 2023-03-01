

import Item from "../../components/Item/Item";
import { AppContext } from '../../App';
import React from 'react';

function ItemPage() {

    const {clickedItem} = React.useContext(AppContext)


    return (
        <div className="container">
        <section className="dailyProduct section container-bottom">

            <Item item={clickedItem}></Item>

        </section>
        </div>
    );
}



export default ItemPage;