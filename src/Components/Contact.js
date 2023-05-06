import React from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_epx8zna', 'template_inp1uq3', e.target, 'mh7ILzzC9jFxbDxxy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("error")
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
        <section class="text-gray-600 body-font relative" id='contact'>
  <div class="container px-5 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
  {/* <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Vidhya Manthan Team</h1> */}

    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.799680081218!2d79.37949761095201!3d28.993306475367305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fd807bccbc3%3A0xda9bbc4a50b7ff5d!2sSaraswati%20Enclave!5e0!3m2!1sen!2sus!4v1681627504779!5m2!1sen!2sus" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">A-13/A-14 SWAGAT ENCLAVE, BHURARANI RUDRAPUR (UDHAM SINGH NAGAR) UTTARAKHAND.LAND MARK: OPPOSITE SARASWATI ENCLAVE
          </p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed" href = "mailto: vidhyamanthan2023@gmail.com">vidhyamanthan2023@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <a class="leading-relaxed" href="tel:8218562423" >8218562423</a>
          <p class="leading-relaxed">9557938789, 8006004774, 9582130350</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-whit flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form onSubmit={sendEmail}>
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font" style={{textAlign:"center"}}>Feedback</h2>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{display:"flex",margin:"auto"}}>Submit</button>
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact