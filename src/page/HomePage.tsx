import About_us_homepage from "../component/About_us_homepage";
import CardUniversity from "../component/CardUniversity";
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
        <Feature />
      </section>
      <section className="flex  my-4 justify-center mb-2">
        <div className="lg:w-[86%] md:w-[90%] w-[90%]">
          <div className="mt-8  border-l-8 border-textprimary">
            <div className="lg:text-4xl md:text-4xl text-xl font-semibold mt-2 mb-1 ml-4 text-textprimary">
              ព័ត៌មាន និង ព្រឹត្តិការណ៍
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className=" mt-4 text-xl w-full text-slate-700">
              ស្វែងរកព័ត៌មានអាហារូបករណ៍ សិក្ខាសាលា
              និងពិព័រណ៍ការងារថ្មីៗជាមួយអនុវត្តន៍ចុងក្រោយ
              សម្រាប់ការបង្កើតនូវឱកាសសិក្សា និងបន្ដអភិវឌ្ឍន៍ការងារអនាគត។
              គ្រប់ព័ត៌មានចាំបាច់ដើម្បីជំរុញការស្វែងយល់ ការសិក្សា
              និងការផ្សាយបន្ដនូវជំនាញវិជ្ជាជីវៈរបស់និស្សិត, មានផ្សាយនៅទីនេះ!
            </div>
          </div>
          <NewsEventHomePage />
          <div className=" flex justify-end items-center mt-6 ">
            <div className="text-xl text-primary  font-kontumruy ">
              ផ្សេងៗទៀត
            </div>
            <div className=" ">
              <BiRightArrowAlt className="text-2xl ml-2 text-primary" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="lg:w-[86%] md:w-[90%] w-[90%]">
          <div className="flex justify-between items-center mb-2">
            <div className="mt-8  border-l-8 border-textprimary flex justify-start items-center mbb-2">
              <div className="lg:text-4xl md:text-4xl text-xl font-bold h-10 mt-2 ml-4 text-textprimary">
                សកលវិទ្យាល័យដែលមានប្រជាប្រិយភាព
              </div>
            </div>
          </div>
          <CardUniversity limit={4} />
          <div className=" flex justify-end items-center mt-6 ">
          <div className="text-xl text-primary  font-kontumruy ">ផ្សេងៗទៀត</div>
          <div className=" ">
            <BiRightArrowAlt className="text-2xl ml-2 text-primary" />
          </div>
        </div>
        </div>
      </section>
      <section>
        <About_us_homepage />
      </section>
      <section className="flex justify-center mt-14 mb-14 ">
        <Feedback />
      </section>
    </div>
  );
}
