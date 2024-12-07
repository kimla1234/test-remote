export default function SliderHomePage() {
  return (
    <div id="gallery" className="relative w-full z-10" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-screen bg-black  overflow-hidden ">
        {/* Item 1 */}
        <div
          className="hidden  opacity-50 duration-3200 ease-in-out"
          data-carousel-item
        >
          <img
            src="https://www.aupp.edu.kh/wp-content/uploads/Students-Life.jpg"
            className="absolute block w-full  h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 2 */}
        <div
          className="hidden opacity-50 duration-3200 ease-in-out "
          data-carousel-item="active"
        >
          <img
            src="https://rupp.edu.kh/iro/image_banner/mainrupp2.jpg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 3 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <img
            src="https://foodstem-euproject.itc.edu.kh/wp-content/uploads/2021/05/ITC-V2-1024x576.jpg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 4 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <img
            src="https://www.aub.edu.kh/tc/assets/image/banner-A-1.jpg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 5 */}
        <div
          className="hidden duration-3200 ease-in-out opacity-50"
          data-carousel-item
        >
          <img
            src="https://foodstem-euproject.itc.edu.kh/wp-content/uploads/2021/05/Web-URDSE2-1024x576.jpg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className=" absolute inset-10 flex  items-center justify-start  z-50 md:p-6 lg:p-8 ml-4 sm:ml-6 md:ml-8 lg:ml-12">
        <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-2">
          <h1
            data-aos="fade-up-right"
            className="text-2xl mb-6 text-white sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-snug aos-init aos-animate"
          >
            ស្វាគមន៍មកកាន់ UniGuide!
          </h1>
          <h1
            data-aos="fade-up-right "
            className="text-2xl   text-white sm:text-3xl md:text-4xl lg:text-2xl  leading-tight sm:leading-tight md:leading-snug lg:leading-snug aos-init aos-animate"
          >
            នៅទីនេះ អ្នកអាចស្វែងរកព័ត៌មានលម្អិតអំពីសកលវិទ្យាល័យនានា
          </h1>
          <h1
            data-aos="fade-up-right "
            className="text-2xl   text-white sm:text-3xl md:text-4xl lg:text-2xl  leading-tight sm:leading-tight md:leading-snug lg:leading-snug aos-init aos-animate"
          >
            និងជម្រើសដែលល្អបំផុតសម្រាប់សិក្សា។
          </h1>
          <div>
            <div className="rounded-md shadow mt-4 ">
              <a
                className="w-full flex items-center justify-center px-8 py-3 border border-slate-500 text-base leading-6 font-medium rounded-md text-white bg-blue-900 hover:bg-blue-600 hover:text-white focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                href=""
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}