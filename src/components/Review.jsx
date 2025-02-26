import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pexels from "../assets/image/pexels.jpg";
import about from '../assets/image/about.jpg';
import heroimg from '../assets/image/heroimg.jpg';
import tailwind from '../assets/image/tailwind.png';


const data = [
  { title: "name", img: heroimg, review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut iste quidem nihil quod eius pariatur voluptatum natus veritatis unde." },

  { title: "name", img: about, review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut iste quidem nihil quod eius pariatur voluptatum natus veritatis unde." },

  { title: "name", img: tailwind, review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut iste quidem nihil quod eius pariatur voluptatum natus veritatis unde." },

  { title: "name", img: pexels, review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut iste quidem nihil quod eius pariatur voluptatum natus veritatis unde." },
 
];

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <div>
            <h2 className='text-4xl text-center mt-10 font-bold'>Testimonial</h2>
        <div className='w-3/4 m-auto'>
            <div className='mt-10 shadow-lg shadow-gray-400 rounded-lg'>
                <Slider {...settings}>
                {data.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl '>
                        <div className='h-56 rounded-t-xl  bg-[#ec806f] flex justify-center items-center'>
                            <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                        </div>

                        <div className='flex flex-col justify-center items-center gap-6 p-4'>
                            <p className='text-xl font-semibold'>{d.name}</p>
                            <p className=''>{d.review}</p>
                            <button className=' bg-[#ec806f] text-white text-lg px-6 py-1 rounded-xl'>Read More..</button>
                        </div>
                    </div>
                ))}</Slider>
            </div>
        </div>
        
        </div>
    </>
  )
}

export default Review