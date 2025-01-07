import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Testimonial from '../assets/Group_8514.png';
import Avtar1 from '../assets/Ellipse_218.png';
import Avtar2 from '../assets/Ellipse_219.png';
import Avtar3 from '../assets/Ellipse_220.png';

const testimolial = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }
    return (
        <>
            <section className="container mx-auto py-5">
                <div className='grid gap-4 grid-cols-2 '>

                    <div className='services_descrip p-12'>
                        <div className=''>
                            <h5 className='uppercase text-red-500 font-semibold text-lg tracking-wider mb-6'>Testimonials</h5>
                            <h1 className='text-4xl font-semibold text-amber-500 mb-3 leading-12'>What our Customer Say <br /> About Us</h1>
                            <br />
                            <Slider {...settings} >
                                <div >
                                    <p className='text-slate-500 leading-7 text-sm text-justify pr-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa voluptatum sit, dolor necessitatibus eos qui exercitationem facilis, consequatur repudiandae eveniet quos est eaque neque illo enim officiis quod hic magni! Laboriosam et itaque mollitia quod ducimus cumque, odit quidem, amet dolor recusandae distinctio officia eos! Non porro hic sapiente tenetur quo ducimus autem id eos ad consectetur eum earum quis voluptate minus quaerat, quae fugiat ipsam soluta facere aperiam a laudantium. Nisi facilis saepe sapiente totam ipsam expedita assumenda esse aut rem! Corporis, cum iure? Saepe dolore magni sint rem dolor tenetur error a aliquam placeat, laborum nulla facere.</p>

                                </div>
                                <div >
                                    <p className='text-slate-500 leading-7 text-sm text-justify pr-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa voluptatum sit, dolor necessitatibus eos qui exercitationem facilis, consequatur repudiandae eveniet quos est eaque neque illo enim officiis quod hic magni! Laboriosam et itaque mollitia quod ducimus cumque, odit quidem, amet dolor recusandae distinctio officia eos! Non porro hic sapiente tenetur quo ducimus autem id eos ad consectetur eum earum quis voluptate minus quaerat, quae fugiat ipsam soluta facere aperiam a laudantium. Nisi facilis saepe sapiente totam ipsam expedita assumenda esse aut rem! Corporis, cum iure? Saepe dolore magni sint rem dolor tenetur error a aliquam placeat, laborum nulla facere.</p>

                                </div>
                            </Slider>
                            <div className='flex'>
                                <ul className='flex relative py-5 withderr' >
                                    <li><img src={Avtar1} alt="Customer" width="75px" /></li>
                                    <li><img src={Avtar2} alt="Customer" width="75px" className='margin-lefter1' /></li>
                                    <li><img src={Avtar3} alt="Customer" width="75px" className='margin-lefter2' /></li>
                                </ul>
                                <div className='flex flex-col justify-center'>
                                    <h5 className='h5 text-slate-950 font-semibold'>Customer Feedback</h5>
                                    <label className='text-slate-400'><span>4.6</span> Review</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='services_icons'> */}
                    <img src={Testimonial} alt="Testimonial image" width="70%" className='mx-auto' />
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default testimolial;