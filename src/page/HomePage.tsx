import About_us_homepage from "../component/About_us_homepage";
import CardUniList from "../component/CardUniList";
import Feature from "../component/Feature";
import Feedback from "../component/Feedback";
import NewsEventHomePage from "../component/NewsEventHomePage";
import SliderHomePage from "../component/SliderHomePage";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HomePage() {
  return (
    <div>
      <section>
        <SliderHomePage />
      </section>
      <section className=" bg-white">
        <Feature/>
      </section>
      <section className="flex justify-center mb-2">
        <div className="  w-[80%]">
          <div className="mt-8  border-l-8 border-blue-800">
            <div className="text-2xl font-bold mt-2 mb-1 ml-4 text-blue-900">
              ព័ត៌មាន
            </div>
            <div className="text-2xl ml-4 font-bold text-blue-900">
              និង ព្រឹត្តិការណ៍
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className=" mt-4 text-xl w-[85%] text-slate-700">
              ស្វែងរកព័ត៌មានអាហារូបករណ៍ សិក្ខាសាលា
              និងពិព័រណ៍ការងារថ្មីៗជាមួយអនុវត្តន៍ចុងក្រោយ
              សម្រាប់ការបង្កើតនូវឱកាសសិក្សា និងបន្ដអភិវឌ្ឍន៍ការងារអនាគត។
              គ្រប់ព័ត៌មានចាំបាច់ដើម្បីជំរុញការស្វែងយល់ ការសិក្សា
              និងការផ្សាយបន្ដនូវជំនាញវិជ្ជាជីវៈរបស់និស្សិត, មានផ្សាយនៅទីនេះ!
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
          <NewsEventHomePage />
        </div>
      </section>
      <section className="flex justify-center">
        <div className="  w-[80%]">
          <div className="flex justify-between items-center">
            <div className="mt-8  border-l-8 border-blue-800 flex justify-start items-center">
              <div className="text-2xl font-bold h-10 mt-2 ml-4 text-blue-900">
                សកលវិទ្យាល័យដែលមានប្រជាប្រិយភាព
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
      <section>
        <About_us_homepage/>
      </section>
      <section className="flex justify-center mt-14 mb-14 ">
        <Feedback/>
      </section>
    </div>
  );
}
