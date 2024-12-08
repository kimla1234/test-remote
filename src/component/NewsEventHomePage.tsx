

export default function NewsEventHomePage() {
  return (
    <div className="w-full dark:bg-gray-800">
      <div className="mx-auto w-full ">
        <div className="mx-auto mt-8 grid w-full  auto-rows-fr grid-cols-1 lg:gap-8 md:gap-6 gap-2 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="../../src/assets/testNews.jpg"
              alt=" dd"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          {/* 2 blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          {/* 3 blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          {/* 4 blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          {/* 5 blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          {/* 6 blog post */}
          <article className="relative h-[350px] isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-4 pt-80 sm:pt-48 lg:pt-80 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/40"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div className=" bg-white/20  backdrop-blur-sm border border-white/20 rounded-lg p-2 mt-4 z-10">
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden  text-sm leading-6 text-gray-300">
                <time dateTime="2023-10-11" className="mr-8">
                  Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1" className="relative inline-block">
                  The Future of Artificial Intelligence: Trends and Challenges
                </a>
              </h3>
            </div>
          </article>
          
        </div>
      </div>
    </div>
  );
}

  