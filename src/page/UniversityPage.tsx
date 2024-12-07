import CardUniList from "../component/CardUniList";
import { BiRightArrowAlt } from "react-icons/bi";

export default function UniversityPage() {
  return (
    <div>
      <div className="relative min-h-[300px]  w-full">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-96"
          style={{
            backgroundImage: 'url("../../src/assets/bg-uni.jpg")',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <h1 className="text-4xl md:text-4xl bordered-text font-bold text-white text-center mb-8">
            ស្វែងរកគ្រឹះស្ថានសិក្សាទៅកម្ពុជា
          </h1>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search input */}
            <div className="flex">
              <input
                type="text"
                placeholder="ស្វែងរកទីនេះ....."
                className="flex-1 px-5 py2 rounded-l-lg border-0 focus:ring-2 "
              />
              <div className=" bg-white rounded-r-lg px-1 py-1">
                <button
                  type="button"
                  className="px-2 py-4  flex justify-center items-center  bg-green-500 rounded-full w-9 h-9  text-white   transition-colors"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-emerald-500">
                <option value="">សាកលវិទ្យាល័យ</option>
                <option value="1">សាកលវិទ្យាល័យ ១</option>
                <option value="2">សាកលវិទ្យាល័យ ២</option>
              </select>

              <select className="w-full px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-emerald-500">
                <option value="">ផ្នែកៗ</option>
                <option value="1">ផ្នែក ១</option>
                <option value="2">ផ្នែក ២</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="  w-[80%]">
          <div className="flex justify-between items-center">
            <div className="mt-8   border-blue-800 flex justify-start items-center">
              <div className="text-xl font-bold h-10 mt-2  text-blue-900">
                សកលវិទ្យាល័យ
              </div>
            </div>
            <div className=" flex justify-start items-center">
              <div className="text-xl text-blue-900 font-bold  font-kontumruy ">
                ផ្សេងៗទៀត
              </div>
              <div className=" ">
                <BiRightArrowAlt className="text-2xl ml-2 text-blue-900" />
              </div>
            </div>
          </div>
          <CardUniList />
        </div>
      </section>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
