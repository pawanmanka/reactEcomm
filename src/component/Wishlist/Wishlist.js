import React from 'react';

export default function Wishlist(){

    return(
      

		<div className="my-wishlist-page">
			<div className="row">
				<div className="col-md-12 my-wishlist">
	                <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colspan="4" className="heading-title">My Wishlist</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="col-md-2"><img src="assets/images/products/p1.jpg" alt="imga"/></td>
                                            <td className="col-md-7">
                                                <div className="product-name"><a href="#">Floral Print Buttoned</a></div>
                                                <div className="rating">
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star non-rate"></i>
                                                    <span className="review">( 06 Reviews )</span>
                                                </div>
                                                <div className="price">
                                                    $400.00
                                                    <span>$900.00</span>
                                                </div>
                                            </td>
                                            <td className="col-md-2">
                                                <a href="#" className="btn-upper btn btn-primary">Add to cart</a>
                                            </td>
                                            <td className="col-md-1 close-btn">
                                                <a href="#" className=""><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-2"><img src="assets/images/products/p2.jpg" alt="phoro"/></td>
                                            <td className="col-md-7">
                                                <div className="product-name"><a href="#">Floral Print Buttoned</a></div>
                                                <div className="rating">
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star rate"></i>
                                                    <i className="fa fa-star non-rate"></i>
                                                    <span className="review">( 06 Reviews )</span>
                                                </div>
                                                <div className="price">
                                                    $450.00
                                                    <span>$900.00</span>
                                                </div>
                                            </td>
                                            <td className="col-md-2">
                                                <a href="#" className="btn-upper btn btn-default">Add to cart</a>
                                            </td>
                                            <td className="col-md-1 close-btn">
                                                <a href="#" className=""><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>		  
    );
}