import React from 'react';
import './Banner.css';

export default function Banner(){
    var BannerData =[
        {
            "name":"Top Brands",
            "title":"New Collections",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "image":"assets/images/sliders/01.jpg"
        },
        {
            "name":"Spring 2016",
            "title":" Women <span className='highlight'>Fashion</span>",
            "desc":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            "image":"assets/images/sliders/02.jpg"
        }
    ];
   
    return(
        <div id="hero">
          <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">              
                {BannerData.map((data,index)=>{
                    var imageUrl={
                        "backgroundImage":"url("+data.image+")"
                    }
                    // console.log(imageUrl);
                    return(
                        <div className="item" style={imageUrl}>
                            <div className="container-fluid">
                                <div className="caption bg-color vertical-center text-left">
                                <div className="slider-header fadeInDown-1">{data.name}</div>
                                <div className="big-text fadeInDown-1"> {data.title} </div>
                                <div className="excerpt fadeInDown-2 hidden-xs"> <span>{data.desc}</span> </div>
                                <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                                </div>             
                            </div>            
                        </div>
                    );
                })}
          </div>       
        </div>
    );
}