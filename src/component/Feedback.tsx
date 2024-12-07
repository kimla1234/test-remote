import { Share2, ArrowUp } from "lucide-react";

export default function Feedback() {
  return (
    <div className=" bg-white w-full h-96 mx-auto p-6 flex justify-center flex-col md:flex-row items-start gap-8">
      <div className=" flex w-[80%]  ">
        {/* Left side illustration */}
        <div className="w-full md:w-1/2 ">
          <img
            src="../../src/assets/feedbaack.jpg"
            alt="Feedback illustration"
            width={40}
            height={40}
            className="w-[400px] h-[350px]"
          />
        </div>

        {/* Right side content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">
              មតិកែលម្អផ្តល់, ជាការកែចម្រើនថ្មី
            </h1>
            <p className="text-slate-600 text-lg">
              អរគុណសម្រាប់ការចូលរួមព្រឹត្តិការណ៍យើងខ្ញុំ!
              សូមជួយផ្តល់មតិនិងយោបល់របស់អ្នកដើម្បីធ្វើឲ្យព្រឹត្តិការណ៍បន្ទាប់កាន់តែប្រសើរ។
            </p>
          </div>

          <textarea
            placeholder="សរសេរមតិយោបល់របស់អ្នកនៅទីនេះ"
            className="w-full min-h-[120px] p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />

          <button className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition duration-300 ease-in-out">
            ផ្ញើមតិកែលម្អ
          </button>

          {/* Action buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-2">
            <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition duration-300 ease-in-out">
              <Share2 className="w-5 h-5 text-amber-700" />
            </button>
            <button className="p-2 bg-amber-100 rounded-full hover:bg-amber-200 transition duration-300 ease-in-out">
              <ArrowUp className="w-5 h-5 text-amber-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}