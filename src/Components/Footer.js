import React from 'react'

const Footer = () => {
  return (
    
    <div>
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img onClick={() => window.location.reload(false)} src ="Assets\logo.jpeg" class="w-15 h-10 text-white" viewBox="0 0 24 24"/>
        
      <span class="ml-3 text-xl">Vidhya Manthan</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 VidhyaManthan —
      <a href="https://instagram.com/ayush_dhaila?igshid=ZDdkNTZiNTM=" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@AyushDhaila</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500" href='https://www.facebook.com/profile.php?id=100089319986377&mibextid=ZbWKwL' target='_blank'>
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href='https://www.youtube.com/@vidhyamanthan' target='_blank'>
      <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
      </a>
      <a class="ml-3 text-gray-500" href='https://instagram.com/vidhyamanthan?igshid=YmMyMTA2M2Y=' target='_blank'>
        <svg fill="none"  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer