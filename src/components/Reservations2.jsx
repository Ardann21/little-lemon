import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import workers from '../assets/Mario and Adrian A.jpg';
import restaurant from '../assets/restaurant.jpg';
import heroPhoto from "../assets/restauranfood.jpg";
import Validation from './Validation'; 

const Reservations2 = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    privacyChecked: false, 
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submissionMessage, setSubmissionMessage] = useState(''); 

  const location = useLocation();

  const { reservationDetails } = location.state || {};


  const {
    date = '',
    seating = '',
    dinners = '',
    occasion = '',
    time = ''
  } = reservationDetails || {};


  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
 
    if (isSubmitting) {
      setErrors(Validation({ ...values, [name]: type === 'checkbox' ? checked : value }));
    }
    setSubmissionMessage(''); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    const currentErrors = Validation(values); 
    setErrors(currentErrors); 

    if (Object.keys(currentErrors).length === 0) {
      setSubmissionMessage('Reservation Sent Successfully!');
    
    } else {
      setSubmissionMessage(''); 
    }
  };

  useEffect(() => {
    if (isSubmitting) { 
      setErrors(Validation(values));
    }
  }, [values, isSubmitting]); 

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 mt-12 bg-[#495E57]'>

        <form onSubmit={handleSubmit} className="contents"> 

          <div className='flex flex-col md:mx-12 mx-6 text-white md:mt-12'>
            <label className='text-start my-2' htmlFor="firstName">First Name</label>
            <input
              className='bg-white border-1 h-12 rounded-lg text-black px-4'
              type="text"
              id='firstName'
              name='firstName' 
              value={values.firstName} 
              onChange={handleInput}
              
            />

            {isSubmitting && errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div className='flex flex-col md:mx-12 mx-6 text-white md:mt-12' >
            <label className='text-start my-2' htmlFor="lastName">Last Name</label>
            <input
              className='bg-white border-1 h-12 rounded-lg text-black px-4' 
              type="text"
              id='lastName'
              name='lastName'
              value={values.lastName}
              onChange={handleInput}
              
            />
            {isSubmitting && errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
          </div>

          <div className='flex flex-col md:mx-12 mx-6 text-white'>
            <label className='text-start my-2' htmlFor="email">Email</label>
            <input
              className='bg-white border-1 h-12 rounded-lg text-black px-4' 
              type="email"
              id='email'
              name='email' 
              value={values.email}
              onChange={handleInput}
              
            />
            {isSubmitting && errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className='flex flex-col md:mx-12 mx-6 text-white'>
            <label className='text-start my-2' htmlFor="number">Number</label>
            <input
              className='bg-white border-1 h-12 rounded-lg text-black mb-12 md:mb-0 px-4' 
              type="tel"
              id='number'
              name='number' 
              value={values.number} 
              onChange={handleInput}
              
            />
            {isSubmitting && errors.number && <p className="text-red-400 text-sm mt-1">{errors.number}</p>}
          </div>

          <div className='flex flex-col md:mx-12 mx-6 bg-white text-white'>
            <textarea className='border-1 h-64 rounded-lg text-black p-4' name="textArea" id="textArea" placeholder='Write your note here.'></textarea>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 mt-12 text-[#F4CE14] text-xl font-bold'>
            <div>
              <p className='md:mb-8'>Date: {date === '' ? 'Please enter date.' : date}</p>
              <p>Dinners: {dinners === '' ? 'Please enter dinner.' : dinners} </p>
            </div>
            <div>
              <p className='md:mb-8'>Time: {time === '' ? 'Please enter time.' : time}</p>
              <p>Occasion: {occasion === '' ? 'Please enter occasion.' : occasion}</p>
            </div>
          </div>

          <div className='flex flex-col mt-12 md:mt-0 md:mx-12 mx-6 text-white mb-12' >

            <h1 className='text-xl mb-7'>{seating === '' ? 'No seating preference selected.' : `${seating} seating.`}</h1>
            <div className='flex'>
              <input
                type="checkbox"
                id='privacyChecked'
                name='privacyChecked'
                checked={values.privacyChecked}
                onChange={handleInput}

              />
              <label className='ml-2' htmlFor="privacyChecked">You agree to our friendly <span className='underline cursor-pointer'>privacy policy</span>.</label>
            </div>
            {isSubmitting && errors.privacyChecked && <p className="text-red-400 text-sm mt-1">{errors.privacyChecked}</p>}
          </div>


          <div className="mt-10 text-center md:text-left flex justify-center col-span-1 md:col-span-2 mb-16">
            <button
              type="submit"
              className="bg-[#F4CE14] text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition cursor-pointer "
            >
              Confirm Reservation
            </button>
          </div>
        </form>


        {submissionMessage && (
          <div className="col-span-1 md:col-span-2 text-center  p-4 bg-green-100 text-green-800">
            <p className="font-semibold">{submissionMessage}</p>
          </div>
        )}
      </section>

      <section className='mt-15 gap-10 flex flex-col md:flex-row justify-center'>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={workers} alt="" /></div>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={heroPhoto} alt="" /></div>
        <div className='md:w-70'><img className='w-full h-70 object-cover' src={restaurant} alt="" /></div>
      </section>
    </>
  );
};

export default Reservations2;
