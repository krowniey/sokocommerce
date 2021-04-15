import React from 'react';
import BagItem from './CartItem';
export default function BagList( {value}) {
   
    const {cart} = value

    return (
        <div className="container-fluid">

        {cart.map(item=>{
            return  <BagItem key={item.id} item={item} value={value} />;
        })}
           
        </div>
    )
}
