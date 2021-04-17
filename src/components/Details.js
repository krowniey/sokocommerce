import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, img, info, price, title, inCart, count } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                        
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 mt-0">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>

                                <div className="col-10 mx-auto col-md-6  text-capitalize">
                                    <div className="my-1"> <strong>Package: {title}</strong></div>

                                    <br />

                                    <div className="my-2" ><small className="text-muted ">{info} </small></div>
                                    <h6 className="text-success my-3">
                                        <strong>
                                            Price: <span> UGX</span>{price}
                                        </strong>
                                    </h6>
                                    <div className="my-5">
                                        
                                        <span className="btn btn-primary text-white  bg-primary ">-</span>
                                        <span className="btn btn-light">{count}</span>
                                        <span className="btn btn-secondary bg-primary" >+</span>
                                    </div>
                                
                                    {/**buttons */}
                                    <div className=" mt-5">
                                        <Link to='/'>
                                            <ButtonContainer className="pl-5 pr-5 pt-1 py-1">
                                                Add to bag
                                           </ButtonContainer>
                                        </Link>

                                        <ButtonContainer className="pl-5 pr-5 pt-1 py-1" cartColor disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }} >

                                            {inCart ? "inBag" : "buy now"}
                                        </ButtonContainer>

                                    </div>
                                </div>
                            </div>
                        </div>);
                }}
            </ProductConsumer>
        );
    }
}
