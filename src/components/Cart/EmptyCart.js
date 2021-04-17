import React from 'react';
import { Link } from "react-router-dom";
export default function EmptyCart() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto  text-center">




                        <div className=" ml-3 mt-5 mr-5 ml-4 ">
                            <img className="emoji  " src="img/emoji.png" alt="confuced" />
                        </div>

                        <div className="  emoji-text text-center mt-4  mr-4"> <strong className="text-center">It empty here</strong><br />
                            <span className=" text-center text-secondary">Start shopping to add items to your bag</span></div>
                        <Link to='/'>
                            <button className="btn btn-warning text-primary  px-5  mt-5 " type="button" >
                                back to product

                        </button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>


    )
}