import React from 'react'
import { Link} from 'react-router-dom'
import heroPhoto from "../assets/restauranfood.jpg"
import salad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import dessert from "../assets/lemon dessert.jpg"
import about from "../assets/about.jpg"

const Main = () => {
  return (
    <>
    <section className="w-full bg-[#495E57] py-12">
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white md:w-1/2">
          <h1 className="text-[36px] text-[#F4CE14] font-bold mb-2">Little Lemon</h1>
          <h4 className="text-[24px] mb-4">Chicago</h4>
          <p className="mb-6 leading-relaxed">
            We are a family owned <br />
            Mediterranean restaurant, <br />
            focused on traditional recipes <br />
            served with a modern twist.
          </p>
          <Link
            to="/reservations"
            className="inline-block bg-[#F4CE14] text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroPhoto}
            alt="Restaurant Food"
            className="rounded-xl min-[400px]:w-[70%] w-[100%] md:w-[350px] object-cover "
          />
        </div>
      </div>
    </section>

    <section className='flex items-center justify-evenly mt-12 flex-wrap'>
      <h1 className='text-[42px] max-lg:text-[32px]'>This weeks specials!</h1> <Link
            to=""
            className="max-lg:text-[12px] bg-[#F4CE14] text-black px-16 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            Online Menu
          </Link>
    </section>

    <section className='mt-10 flex flex-col gap-12 min-[340px]:flex-row flex-wrap justify-center' >
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={salad} alt="salad" />
        <div className='flex justify-between p-5'><h1>Greek salad</h1>
        <p>$12.99</p></div>
        
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={bruchetta} alt="bruchetta" />
        <div className='flex justify-between p-5'><h1>Bruchetta</h1>
        <p>$5.99</p></div>
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={dessert} alt="dessert" />
        <div className='flex justify-between p-5'><h1>Lemon Dessert</h1>
        <p>$5.00</p></div>
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={salad} alt="salad" />
        <div className='flex justify-between p-5'><h1>Greek salad</h1>
        <p>$12.99</p></div>
        
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={bruchetta} alt="bruchetta" />
        <div className='flex justify-between p-5'><h1>Bruchetta</h1>
        <p>$5.99</p></div>
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={dessert} alt="dessert" />
        <div className='flex justify-between p-5'><h1>Lemon Dessert</h1>
        <p>$5.00</p></div>
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={salad} alt="salad" />
        <div className='flex justify-between p-5'><h1>Greek salad</h1>
        <p>$12.99</p></div>
        
      </div>
      <div className='bg-[#EDEFEE] rounded-xl min-[340px]:w-[250px]'>
        <img className='w-[100%] h-50 object-cover' src={bruchetta} alt="bruchetta" />
        <div className='flex justify-between p-5'><h1>Bruchetta</h1>
        <p>$5.99</p></div>
      </div>
      
    </section>

    <section>
      <h1 className='my-8 md:my-20 text-4xl text-[#F4CE14]' >About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2  bg-[#495E57] ' >
        <div className='my-10 w-full md:w-[350px] m-auto'><img className='w-full h-[230px] object-cover md:h-[450px] rounded-2xl md:object-right' src={about} alt="about" /></div>
        <div className='md:flex mr-13 items-center text-start text-white'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem porro
           ad iusto omnis, aliquid similique veniam suscipit cupiditate est minus a quis,
            dignissimos reprehenderit nemo rem? Officiis, maxime molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ullam mollitia voluptatum recusandae. Vero dignissimos, aut nulla asperiores ea labore blanditiis assumenda eveniet
              optio numquam rem debitis quidem ipsum quis ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias
               optio ea cum voluptatibus magnam, velit obcaecati explicabo veritatis impedit amet? Magni obcaecati sunt accusantium
                tempore magnam dicta placeat nisi.</p></div>
      </div>
    </section>
    
    </>
  )
}

export default Main