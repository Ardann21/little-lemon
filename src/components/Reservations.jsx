import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import workers from '../assets/Mario and Adrian A.jpg';
import restaurant from '../assets/restaurant.jpg';
import heroPhoto from "../assets/restauranfood.jpg";

const Reservations = () => {

  const [date, setDate] = useState("");
  const [seating, setSeating] = useState("Indoor"); 
  const [dinners, setDinners] = useState("");
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

  

  const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault(); 


    const formData = {
      date,
      seating,
      dinners,
      occasion,
      time
    };

    
    navigate('/reservations2', { state: { reservationDetails: formData } });
  };

  return (
    <>
      <section className='bg-[#495E57] pb-30 px-4'>
        <h1 className='mb-10 mt-10 text-[32px] text-[#F4CE14]'>Reservations</h1>
        {/* Attach onSubmit handler to the form */}
        <form className="grid gap-6 grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit}>

          {/* Seating Selection */}
          <div className="col-span-1 md:col-span-2 flex flex-wrap gap-x-10 gap-y-4">

            <div className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                id="indoor-seating"
                name="seating-preference"
                value="Indoor"
                className="form-radio h-4 w-4 text-[#F4CE14] bg-white border-gray-300 focus:ring-[#F4CE14]"
                defaultChecked={seating === "Indoor"} 
                onChange={e => setSeating(e.target.value)}
              />
              <label className='text-white' htmlFor="indoor-seating">Indoor seating</label>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                id="outdoor-seating"
                name="seating-preference"
                value="Outdoor"
                className="form-radio h-4 w-4 text-[#F4CE14] bg-white border-gray-300 focus:ring-[#F4CE14]"
                defaultChecked={seating === "outdoor"} 
                onChange={e => setSeating(e.target.value)}
              />
              <label className='text-white' htmlFor="outdoor-seating">Outdoor seating</label>
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col">
            <label htmlFor="reservation-date" className="mb-2 text-lg text-white">Date</label>
            <div className="relative">
              <input
                type="date"
                id="reservation-date"
                name="reservationDate"
                className="h-14 rounded-lg px-4 text-black bg-white w-full appearance-none pr-10 border-1"
                onChange={e => setDate(e.target.value)}
                value={date} 
              />
            </div>
          </div>

  
          <div className="flex flex-col">
            <label htmlFor="num-diners" className="mb-2 text-lg text-white">Number of Diners</label>
            <div className="relative">
              <select
                id="num-diners"
                name="numberOfDiners"
                className="h-14 rounded-lg px-4 text-black bg-white w-full appearance-none pr-10 border-1"
                onChange={e => setDinners(e.target.value)}
                value={dinners} 
              >
                <option value="" disabled>No. of Diners</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
       
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col">
            <label htmlFor="occasion-select" className="mb-2 text-lg text-white">Occasion</label>
            <div className="relative">
              <select
                id="occasion-select"
                name="occasion"
                className="h-14 rounded-lg px-4 text-black bg-white w-full appearance-none pr-10 border-1"
                onChange={e => setOccasion(e.target.value)}
                value={occasion} 
              >
                <option value="" disabled>Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
          </div>

         
          <div className="flex flex-col">
            <label htmlFor="time-select" className="mb-2 text-lg text-white">Time</label>
            <div className="relative">
              <select
                id="time-select"
                name="time"
                className="h-14 rounded-lg px-4 text-black bg-white w-full appearance-none pr-10 border-1"
                onChange={e => setTime(e.target.value)}
                value={time} 
              >
                <option value="" disabled>Select time</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="9:00 pm">9:00 pm</option>
                <option value="10:00 pm">10:00 pm</option>
              </select>
             
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          
          <div className="mt-10 text-center md:text-left flex justify-center col-span-1 md:col-span-2">
            <button
              type="submit" 
              className="bg-[#F4CE14] text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>
        </form>
      </section>

      <section className='mt-15 gap-10 flex flex-col md:flex-row justify-center'>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={restaurant} alt="" /></div>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={workers} alt="" /></div>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={heroPhoto} alt="" /></div>
      </section>
    </>
  );
};

export default Reservations;
