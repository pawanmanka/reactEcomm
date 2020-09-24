import React from 'react';
import './ProductComparison.css';
export default function ProductComparison(){   
    return(    
    <div className="product-comparison">
        <h1 className="page-title text-center heading-title">Product Comparison</h1>
        <div className="table-responsive">
            <table className="table compare-table inner-top-vs">
                <tr>
                    <th>Products</th>
                    <td>
                        <div className="product">
                            <div className="product-image">
                                <div className="image">
                                    <a href="detail.html">
                                        <img alt="" src="assets/images/products/p1.jpg"/>
                                    </a>
                                </div>

                                <div className="product-info text-left">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="action">
                                        <a className="lnk btn btn-primary" href="#">Add To Cart</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="product">
                            <div className="product-image">
                                <div className="image">
                                    <a href="detail.html">
                                        <img alt="" src="assets/images/products/p2.jpg"/>
                                    </a>
                                </div>

                                <div className="product-info text-left">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="action">
                                        <a className="lnk btn btn-primary" href="#">Add To Cart</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="product">
                            <div className="product-image">
                                <div className="image">
                                    <a href="detail.html">
                                        <img alt="" src="assets/images/products/p4.jpg"/>
                                    </a>
                                </div>

                                <div className="product-info text-left">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="action">
                                        <a className="lnk btn btn-primary" href="#">Add To Cart</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="product">
                            <div className="product-image">
                                <div className="image">
                                    <a href="detail.html">
                                        <img alt="" src="assets/images/products/p5.jpg"/>
                                    </a>
                                </div>

                                <div className="product-info text-left">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="action">
                                        <a className="lnk btn btn-primary" href="#">Add To Cart</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th>Price</th>
                    <td>
                        <div className="product-price">
                            <span className="price"> $300.00 </span>
                            <span className="price-before-discount">$500.00</span>
                        </div>
                    </td>

                    <td>
                        <div className="product-price">
                            <span className="price"> $350.00 </span>
                            <span className="price-before-discount">$500.00</span>
                        </div>
                    </td>

                    <td>
                        <div className="product-price">
                            <span className="price"> $400.00 </span>
                            <span className="price-before-discount">$500.00</span>
                        </div>
                    </td>

                    <td>
                        <div className="product-price">
                            <span className="price"> $3600.00 </span>
                            <span className="price-before-discount">$500.00</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th>Description</th>
                    <td><p className="text">Proin semper eros ac posuere ultrices. Nulla quis mi in risus volutpat blandit vestibulum in lorem. In euismod laoreet sapien vel gravida.  Proin sem per eros ac posuere ultrices. Nulla quis mi in risus.</p></td>
                    <td><p className="text">Proin semper eros ac posuere ultrices. Nulla quis mi in risus volutpat blandit vestibulum in lorem. In euismod laoreet sapien vel gravida.  Proin sem per eros ac posuere ultrices.</p> </td>
                    <td><p className="text">Proin semper eros ac posuere ultrices. Nulla quis mi in risus volutpat blandit vestibulum in lorem. In euismod laoreet sapien vel gravida.</p></td>
                    <td><p className="text">Proin semper eros ac posuere ultrices. Nulla quis mi in risus volutpat blandit vestibulum in lorem. In euismod laoreet sapien vel gravida.  Proin sem per eros ac posuere ultrices. Nulla quis mi in risus.</p></td> 
                </tr>

                <tr>
                        <th>Availability</th>
                        <td><p className="in-stock">In Stock</p></td>
                        <td><p className="in-stock">In Stock</p></td>
                        <td><p className="in-stock">In Stock</p></td>
                        <td><p className="in-stock">In Stock</p></td>
                </tr>

                <tr >
                    <th>Remove</th>
                    <td className='text-center'><a href="#" className="remove-icon"><i className="fa fa-times"></i></a></td>
                    <td className='text-center'><a href="#" className="remove-icon"><i className="fa fa-times"></i></a></td>
                    <td className='text-center'><a href="#" className="remove-icon"><i className="fa fa-times"></i></a></td>
                    <td className='text-center'><a href="#" className="remove-icon"><i className="fa fa-times"></i></a></td>
                </tr>
            </table>
        </div>
                
    </div>
        
    );
}