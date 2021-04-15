import React, { Component } from 'react';
import Product from "./Product";
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {


    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="container-fluid">

                        <div className="row">
                            <div className=" side-bar col-md-3 col-lg-3 col-sm-12  border-right ">
                                <div className="customDiv ml-5 ">
                                    <div className="ml-5 ">
                                        <div className="my-3  text-secondary"> <Link to="/" className="text-secondary">Electronics (12) </Link></div>

                                        <div className=" my-2"> <Link to="/" className="text-secondary" >Face Masks (3) </Link></div>
                                        <div className="my-3 "> <Link to="/" className="text-secondary">Fresh Food(8) </Link></div>
                                        <div className="my-3"> <Link to="/" className="text-secondary">Grocery(6) </Link></div>
                                        <div className="my-3"> <Link to="/" className="text-secondary">Home(24) </Link></div>
                                        <div className="my-3"> <Link to="/" className="text-secondary">Home(9) </Link></div>
                                        <div className="my-4">  <Link to="/">View all cateories </Link></div>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-md-6 col-lg-6">
                                <div class="customDiv">
                                    <form className=" row form-inline">
                                        <div className=" col-12 text-center  justify-content-center">

                                            <div className="form">

                                                <div class="input-group">

                                                    <input type="text" name="" class="form-control input_user" value="" placeholder="search for products here..." />
                                                    <div class="input-group-append">
                                                        <span class="input-group-text rounded-right "><i class="fas fa-search"></i></span>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                    </form>


                                    <ProductConsumer>
                                        {value => {
                                            return value.products.map(product => {
                                                return <Product key={product.id} product={product} />;
                                            })
                                        }}
                                    </ProductConsumer>
                                </div>

                            </div>

                            <div class="col-md-3 col-lg-3 col-sm-12 border-left">
                                <div class="customDiv">
                                    <div className="ml-3"><strong className="text-dark">Bag</strong><span className=" b ml-3 border rounded  text-white pl-2 pr-2 ">0</span></div>

                                    <div className=" ml-3 mt-5 mr-5 ml-5 ">
                                        <img className="emoji  " src="img/emoji.png" alt="confuced" />
                                    </div>

                                    <div className="  emoji-text text-center mt-4 "> <strong className="text-center">It empty here</strong><br />
                                        <span className=" text-center text-secondary">Start shopping to add items to your bag</span></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="jumbotron">
                        <div className="row offset-3">
                            <div className=" jumb  col-3 ">
                                <div className="">
                                    <i class="far fa-shipping-timed"></i>
                                    <p className="text-white text-center">Fast delivery</p>
                                </div>
                            </div>
                            <div className="jumb  col-3 ">
                                <div>
                                    <i class="fad fa-ribbon"></i>
                                    <p className="text-white text-center"> Buyer protection</p>
                                </div>

                            </div>
                            <div className="jumb   col-3 ">
                                <div>
                                    <i class="fas fa-history"></i>
                                    <p className="text-white text-center">Customer support</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    <div className="row ">
                            <div className="col-12 text-center">
                                <p className="text-secondary">Store details</p>
                                <strong>Target</strong>
                                <p className="text-secondary">cham Towers, plot 12 Nkeruwa Rd, kampala.Ug</p>
                                <button className="bg-success text-white border-0"> <i class="fab fa-whatsapp"></i><a href="whatsapp.com"/> chat with us</button>

                            </div>

                        </div>
                </div>
            </React.Fragment>
            //<Product />

        )
    }
}

