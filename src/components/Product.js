import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (

            
                <ProductConsumer>

                    {(value) => (
                        <div className="create-post  ">

                            <div className="add-test">
                                <div className="img-container profile"
                                    onClick={() =>
                                        value.handleDetail(id)
                                    }>


                                    <Link to="/details">
                                        <img src={img} alt="product" style={{ height: "80px", width: "90px" }} className="border rounded" />
                                    </Link>

                                </div>
                                <div className=" ml-5 text-dark">
                                    {title}
                                    <p className=" text-secondary">
                                        <span className="">UGX</span>
                                        {price}

                                    </p>


                                    <button className="btns" disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }}
                                    >
                                        {inCart ? (
                                            <p className="text-capitalize " disabled>
                                                {""}
                                      inBag
                                            </p>
                                        ) : (<i className="text-primary">+ Add</i>)}
                                    </button>
                                </div>
                            </div>

                        </div>


                    )}

                </ProductConsumer>






        );
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}


