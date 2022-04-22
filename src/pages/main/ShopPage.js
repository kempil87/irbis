import React from 'react';
import {useParams} from "react-router-dom";
import {ProductShop} from "../../data/ShopData/ProductShop";

const ShopPage = () => {


    const {id} = useParams()
    const product = ProductShop.find(i => i.id === +id)

    return (
        <div>
            {product.id}
        </div>
    );
};

export default ShopPage;
