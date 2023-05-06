import React from 'react'

const Carousel = () => {
  return (
    <div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-15 mx-auto flex flex-col">
    <div class="lg:w-5\6 mx-auto">
      <div class="rounded-lg h-96 overflow-hidden .max-w-full .h-auto">
        <img alt="content" class="object-cover object-center h-full w-full sm:block md:hidden lg:hidden xl:hidden" src='Assets\Carousel Image 386.jpg' />
        <img alt="content" class="object-cover object-center h-full w-full sm:hidden md:block lg:hidden xl:hidden" src='Assets\Carousel 728.jpg' />
        <img alt="content" class="object-cover object-center h-full w-full sm:hidden md:hidden lg:block xl:block" src='Assets\Carousel Image.jpg' />

        
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img style={{borderRadius:'40px'}} src='Assets\Team3.jpg'/>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Tanuj Bohra</h2>
            <div class="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
            <p class="text-base">PhD*, NTA NET (97.29 percentile) Commerce, DBF (IIBF) </p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Hello! Meet Mr. Tanuj Bohra, an accomplished and highly qualified educator in the field of commerce. With a Ph.D.* and an impressive NTA NET (97.29 percentile) in Commerce, Mr. Bohra's expertise and knowledge in the subject matter are unparalleled. He also holds a prestigious DBF (IIBF) qualification, further enhancing his credentials as a distinguished teacher. Mr. Bohra's dedication to teaching and passion for empowering students with a deep understanding of commerce is truly commendable. His years of experience and academic achievements make him a respected figure in the field of commerce education. Get ready to embark on a journey of learning and growth with Mr. Tanuj Bohra as your trusted guide!.</p>
          <a class="text-purple-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Carousel