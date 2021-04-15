import React, { Component } from 'react'
// import styled from 'styled-components';
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


// const ProductWrapper = styled.div`
// .card{
//     border-color: transparent;
//     transition: all 2s linear;
// }
// .card-footer{
//     background:transparent;
//     border-top:transaprent;
//     transition: all 1s linear;
// }
// &:hover{
//     .card{
//         border :0.04rem solid rgba(0,0,0.2);
//     }
//     .card-footer{
//         background: rgba(247,247,247);
//     }

// }
// .img-container{
//     position:relative;
//     overflow:hidden
// }
// .card-img-top{
// transition:all 1s linear;
// }
// .img-container:hover .card-img-top{
//     transform: scale(1.2);

// }

// .cart-btn{
//     position:absolute;
//     bottom:0;
//     right:0;
//     padding:0.2rem 0.4rem;
//     background: var(--lightGreen);
//     border:none;
//     color: var(--mainWhite);
//     font_size : 1.4rem;
//     border_radius: 0.5rem 0 0 0;
//     transform:translate(100%, 100%);
//     transition:all 1s linear;
// }
// .img-container:hover .cart-btn{
//     transform: translate(0.0);
// }
// .cart-btn:hover{
//     color:var(--mainGreen);
//     cursor:pointer;
// }
// `
