import React from 'react'

export default function CartItem({ item, value }) {

    const { id, title, price, total, count } = item;
    const { incrementation, decrementation, removeItem } = value

    return (
        <div className="container">
            <div className="row">
                <div className="col-8"></div>

                <div className="col-4 ">
                    <div className="row border-left my-2 text-capitalize text-center">
                        
                        <div className="col-10 mx-auto col-lg-12">
                            <span className="d-lg-none">product:</span>
                            {title}
                        </div>
                        <div className="col-10 mx-auto col-lg-12">
                            <div className="d-flex jusify-content-center">
                                <span className="d-lg-none">price:</span>
                                {price}

                                <div>
                                    <span className="btn btn-black mx-1" onClick={() => decrementation(id)}>-</span>
                                    <span className="btn btn-black mx-1">{count}</span>
                                    <span className="btn btn-black mx-1" onClick={() => incrementation(id)}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-12 my-2 my-lg-0">
                            <div className="d-flex jusify-content-center">
                                <div>
                                    <span className="btn btn-black mx-1" onClick={() => decrementation(id)}>-</span>
                                    <span className="btn btn-black mx-1">{count}</span>
                                    <span className="btn btn-black mx-1" onClick={() => incrementation(id)}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-12">

                            <div className="cart-icon" onClick={() => removeItem(id)}>
                                <i className="fa fa-trash"></i>
                            </div>
                        </div>
                        <div className="col-10 mx-auto col-lg-12">
                            <strong>item total : UGX {total}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
