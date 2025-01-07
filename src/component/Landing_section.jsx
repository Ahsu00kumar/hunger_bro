import Main_image from '../assets/barger.svg';
import Button from './Button';

const Landing_section = () => {

    const handleClick = () => {
        alert('Button clicked!');
    }

    return (
        <>
            <section className='for_yellow_circle pb-12 '>
                <div className="lg:container lg:mx-auto px-2 lg:px-3 relative ">
                    <div className="flex items-center border-b-1">
                        <div className="flex-1">
                            <div className="w-full">
                                <h2 className="text-2xl text-red-500 font-semibold pb-3">Now Taking Online Orders </h2>
                                <h1 className="text-5xl relative font-bold pb-5">The <span className="best_food text-amber-500 drop-shadow-2xl ">Best Food</span> For You  </h1>
                                <p className='w-9/12 text-justify text-base leading-7 pb-7 pt-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur. Pellentesque dictumst erat cursus suspendisse eu tempus  dolor sit amet consectetur. Pellentesque dictumst  erat gravid phasellus.</p>
                                <Button title='Order Now' onclick={handleClick} />

                            </div>
                        </div>
                        <div className="flex-1 ">
                            <div className="relative">
                                <img src={Main_image} alt="Main Image of Hunger-Bro " className='w-full p-8 drop-shadow-5xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Landing_section;
