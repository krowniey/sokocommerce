import React from 'react'

export default function CartItem({ item, value }) {

    const { id, title, price, count } = item;
    const { incrementation, decrementation, removeItem } = value;
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-8"></div>

                <div className="col-4 ">
                    <div className="row border-left my-2 text-capitalize ">
                        
                        <div className="col-10 mx-auto mt-5 my-3 col-lg-12">
                        <strong className="">
                            {title}
                            <br/>
                            <small className="text-secondary"><strong>per priece</strong>
                            </small>
                        </strong>
                        <div className="col-10 mx-auto col-lg-12">
                            <div className=" mt-3">

                               <span className="mr-2 "> UGX </span>
                                {price}
                                <div className="counter d-flex   justify-content-end">
                                    <span className="btn btn-black rounded-left" onClick={() => decrementation(id)}>-</span>
                                    <span className="btn border-top btn-black bg-white border-bottom ">{count}</span>
                                    <span className="btn btn-black rounded-right " onClick={() => incrementation(id)}>+</span>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-10 mx-auto col-lg-12 my-2 my-lg-0">
                            
                        </div>
                        <div className="col-10 mx-auto col-lg-12">

                            <div className="cart-icon" onClick={() => removeItem(id)}>
                                <i className="fa fa-trash"></i>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <hr/>
            </div>
        </div>
        
        </div>
    );

}
