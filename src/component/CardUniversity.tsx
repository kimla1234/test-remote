export default function CardUniversity({ limit = 8 }: { limit?: number }) {
  const universities = [
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
    {
      name: "សាកសវិទ្យាល័យ ភូមិន្ទភ្នំពេញ",
      englishName: "Royal University of Phnom Penh",
      address: "សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក",
      major: "ព័ត៌មានវិទ្យា",
      logo: "../../src/assets/logoUniversity/rupp.png",
      link: "#",
    },
  ];

  // Limit the displayed universities
  const displayedUniversities = universities.slice(0, limit);

  return (
    <div className="lg:mt-10 md:mt-5 mt-4 mx-auto grid w-auto auto-rows-fr grid-cols-1 lg:gap-8 md:gap-3 gap-3  lg:grid-cols-2 ">
      {displayedUniversities.map((university, index) => (
        <div key={index}>
          <a
            href={university.link}
            className="flex lg:p-6 space-x-6 md:p-6 p-2 lg:h-50 md:h-full w-full flex-row items-center bg-white border border-gray-100 shadow-sm rounded-2xl  md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className=" flex justify-center items-center">
              <img
                src={university.logo}
                alt={university.name}
                width={200}
                height={200}
                className="object-contain w-40 h-40 "
              />
            </div>
            <div className="flex flex-col justify-between w-full h-auto lg:p-2 md:p-2 p-0 leading-normal">
              <div className="lg:mb-2 md:mbb-2 mb-1 text-3xl font-medium tracking-tight text-textprimary dark:text-white">
                {university.name}
              </div>
              <div className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-xl lg:text-xl  text-gray-600">
                {university.englishName}
              </div>
              <p className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-lg lg:text-lg font-normal text-gray-600 dark:text-gray-400">
                {university.address}
              </p>
              <div className="lg:mb-2 md:mbb-2 mb-2 text-sm md:text-lg block md:hidden lg:hidden  lg:text-lg text-textprimary">
                ជំនាញពេញនិយម ៖
                <span className="text-sm md:text-lg lg:text-lg text-secondary">
                  {university.major}
                </span>
              </div>
              <div className="flex justify-between items-center ">
                <div className="text-sm md:text-lg hidden md:flex lg:flex lg:text-lg text-textprimary">
                  ជំនាញពេញនិយម ៖
                  <span className="text-sm md:text-lg lg:text-lg ml-2 text-secondary">
                    {university.major}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
