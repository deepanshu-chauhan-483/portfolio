import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Contact1 = () => {
  const form = useRef();

  // State to manage form data and email sent status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailSent, setEmailSent] = useState(null); // State for notification

  // Handling input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service call
    emailjs
      .sendForm('service_1', 'template_o21lsnb', form.current, {
        publicKey: 'NL5Al0dmgUdJX01mE',
      })
      .then(
        () => {
          setEmailSent(true); // Set emailSent to true on success
          setFormData({ name: '', email: '', message: '' }); // Clear form data state
          e.target.reset(); // Reset the form fields
          
          // Show success toast notification
          toast.success('Email Sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
          });
        },
        (error) => {
          setEmailSent(false); // Set emailSent to false on failure
          
          // Show error toast notification
          toast.error('Email not sent. Please try again.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="container mx-auto my-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <motion.h2  variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="h2 text-3xl font-bold text-pink-500 font-secondary">GET IN TOUCH</motion.h2>
          <motion.h1  variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView="show" className="h1 text-5xl font-bold font-tertiary">
            Let's work
            <br />
            together!
          </motion.h1>
        </div>

        <motion.div  variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
           className="lg:w-1/2 w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="bg-transparent rounded-lg p-8 shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-md font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-md font-medium mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-md font-medium mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border-b border-gray-600 focus:border-pink-500 outline-none py-2"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact1;
