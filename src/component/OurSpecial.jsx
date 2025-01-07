import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main_image from '../assets/about_image.png';
import Product1 from '../assets/product1.webp';
import Product2 from '../assets/product5.jpeg';
import Product3 from '../assets/product3.webp';
import Product4 from '../assets/product4.png';
import Button from './Button'
const Products = [
  { id: 1, name: 'Tomato Garlic Pizza ', price: 159, rating: 4.5, img: Product1 },
  { id: 2, name: 'Overloaded Chow Mein', price: 255, rating: 4.5, img: Product2 },
  { id: 3, name: 'Burger With French Fries', price: 154, rating: 4.5, img: Product3 },
  { id: 4, name: 'Burger2', price: 200, rating: 4.8, img: Product4 }
];


const OurSpecial = () => {
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
          <main className=''>
            <div className='container mx-auto py-12'>
              <div class="flex items-center justify-center flex-col">
                <h5 class="uppercase text-red-500 font-semibold text-lg tracking-wider mb-6">Customer favorites</h5>
                <h2 class="uppercase text-amber-500 text-5xl tracking-wider font mb-12 ">Popular products</h2>
                <p class="text-md text-slate-500 w-8/12 text-center mb-12">Lorem ipsum dolor sit amet consectetur. Pellentesque dictumst erat cursus suspendisse eu tempus  dolor sit amet consectetur. Pellentesque dictumst  erat gravid phasellus.</p>
              </div>

              <ul className='grid grid-cols-4 gap-4'>

                {Products.map((Productss) => (
                  <li className="border rounded-xl overflow-hidden relative" key={Productss.id}>
                    <div className="relative product_parent">

                      {Productss.img ? <img src={Productss.img} alt={Productss.name} className="product_images object-cover w-full" /> : <img src={Product0} alt="product" className="product_images object-cover w-full" />}

                      <div className='p-2 text-center'>
                        <h4 className='text-base font-semibold'>{Productss.name}</h4>
                        <label htmlFor="rating">{Productss.rating}</label>
                        <div className='flex items-center justify-center'>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                          </svg>
                        </div>
                        <div className="flex justify-between items-center px-2">
                          <label className="text-md font-bold text-slate-500 filter drop-shadow"><span className='text-red-500'>Rs.</span>&nbsp;<span className='text-black'>{Productss.price}</span></label>
                          <Button title="Order" />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}

              </ul>


            </div>

            <Footer />
          </main>
        </div >
      </div ></>
  )
}

export default OurSpecial
