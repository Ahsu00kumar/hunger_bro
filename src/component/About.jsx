import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main_image from '../assets/about_image.png';
import Vision from '../assets/vision.jpg';
import Mission from '../assets/mission1.jpg';
import Image from '../assets/img-1.jpg';
import Image2 from '../assets/img-2.jpg';
import Image3 from '../assets/Image3.jpg';
// import Button from './Button';

const About = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <main className='for_about_bg'>
            <Header />
            <section className=''>
              <div className="lg:container lg:mx-auto px-2 lg:px-3 relative ">
                <div className="flex items-center ">
                  <div className="flex-1">
                    <div className="w-full">
                      <h2 className="text-2xl text-red-500 font-semibold pb-3 relative">About us</h2>
                      <h5 className="text-4xl capitalize leading-relaxed relative font-bold pb-5 text-white">we’re passionate about sharing the joy of a good meal.</h5>
                      {/* <p className='w-9/12 text-justify text-base leading-7 pb-7 pt-3 text-white'>Lorem ipsum dolor sit amet consectetur. Pellentesque dictumst erat cursus suspendisse eu tempus  dolor sit amet consectetur. Pellentesque dictumst  erat gravid phasellus.</p> */}
                      {/* <Button title='Order Now' onclick={handleClick} /> */}
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <div className="relative">
                      <img src={Main_image} alt="Main Image" className='w-full drop-shadow-5xl' />
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </main>
          <main className='bg-slate-100'>
            <section className='lg:container lg:mx-auto px-2 lg:px-3 relative '>
              <div className="py-12 mx-auto text-justify">
                {/* <h2 className="text-2xl text-red-500 font-semibold pb-3"></h2>   */}
                <p className='text-base leading-8 pb-7 pt-3 text-dark'>Welcome to <b>Hunger-Bro</b>, where every bite is a journey of flavor. We’re not just a restaurant, we’re a food destination. Our team is dedicated to bringing you the finest ingredients and innovative recipes, crafted to make your taste buds dance. Whether it’s a quick bite or a leisurely meal with friends, we’re here to make every visit a memorable one.</p>
              </div>

              <div className="py-12 mx-auto border-y ">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-3xl text-red-500 font-semibold pb-3 relative short_underline">Our Vision</h2>
                    <p className='text-base leading-8 pb-7 pt-3 text-dark'>To become a culinary destination where every meal tells a story, bringing people together through authentic, flavorful experiences. We aim to create lasting memories with each bite, fostering community, connection, and a passion for good food.</p>
                  </div>
                  <div>
                    <img src={Vision} alt="vision" className='w-full borderrr ' />
                  </div>
                </div>
              </div>

              <div className="py-12 mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className='pe-5'>
                    <img src={Mission} alt="vision" className='w-full h-75 borderrr ' />
                  </div>
                  <div>
                    <h2 className="text-3xl text-red-500 font-semibold pb-3 relative short_underline">Our Mission</h2>
                    <p className='text-base leading-8 pb-7 pt-3 text-dark'>Our mission is to deliver an exceptional dining experience by serving high-quality, locally sourced ingredients prepared with creativity and care. We strive to offer a diverse menu that caters to every taste, while providing a welcoming atmosphere where guests feel at home, every time. At Hunger-Bro, we are dedicated to making every meal a celebration of flavor, friendship, and tradition.</p>
                  </div>

                </div>
              </div>


            </section>
            <section className='grid grid-cols-4'>
              <div className="About_images">
                <img src={Image} alt="Image" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image2} alt="Image2" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image3} alt="Image3" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image} alt="Image" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image2} alt="Image2" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image3} alt="Image3" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image2} alt="Image2" className='w-100 h-full object-cover' />
              </div>
              <div className="About_images">
                <img src={Image3} alt="Image3" className='w-100 h-full object-cover' />
              </div>
             
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About
