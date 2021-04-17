import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">

                    <div className="  col-4 mt-2 ml-sm-5 ml-md-auto   border-left text-capitalize ">
                        <div className="row">
                            <Link className="col-12" to="/"> <button className="btn btn-outline-danger  mb-3 px-5 " type="button"
                                onClick={() => clearCart()}>
                                Clear Bags

                           </button></Link>
                            <div className='col-12'>

                                <strong className="  d-flex justify-content-between text-secondary ">
                                    subtotal
                                        <strong className="text-secondary">
                                        UGX {cartSubTotal}</strong>
                                </strong>

                            </div>
                            <div className='col-12'>

                                <small className=" mt-2  d-flex justify-content-between text-secondary ">
                                    Delivery
                                    <span className="text-success">
                                        free</span>
                                </small>

                            </div>




                            <div className='col-12  mt-4 border-top'>

                                <strong className=" mt-2  d-flex justify-content-between text-secondary ">
                                    tax
                                    <strong>
                                        UGX {cartTax}</strong>
                                </strong>

                            </div>

                            <div className='col-12   mt-2'>

                                <strong className="  d-flex justify-content-between text-success ">
                                    total
                                    <strong>
                                        UGX {cartTotal}</strong>
                                </strong>

                            </div>
<div className=" col-12 mt-2 border-top">
                            <small className="text-success ">you're about to save more UGX from this order</strong></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

