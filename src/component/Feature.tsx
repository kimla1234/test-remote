export default function Feature() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-900">
        តើ<span className=" text-emerald-500">សកលវិទ្យាល័យ</span>សម្រាប់អ្នកណា?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Student Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 relative w-80 h-80">
            <img
              src="../../src/assets/Student stress-bro.png"
              alt="Student studying"
              width={256}
              height={256}
              className="object-contain w-80 h-80"
            />
          </div>
          <div className="w-80">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">
              សិស្សនិស្សិត
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              សិស្សនិស្សិតអាចស្វែងរកលើកិច្ចការ
              ចំណាប់អារម្មណ៍ខ្លួននិងជំនាញដែលខ្លួនចង់ធ្វើបន្តទៅ
            </p>
          </div>
        </div>

        {/* Professional Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 relative w-80 h-80">
            <img
              src="../../src/assets/college entrance exam-bro.png"
              alt="Professional working"
              width={256}
              height={256}
              className="object-contain w-96 h-96"
            />
          </div>
          <div className="w-80">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">
              សិស្សសកលនិស្សិត
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              សិស្សសកលនិស្សិតដែលបានអាចរៀបចំ ស្វែងរកកំណត់ត្រូវដើម្បីនិស្សិតខ្លួន
            </p>
          </div>
        </div>

        {/* Business Professional Section */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 relative w-80 h-80">
            <img
              src="../../src/assets/Task-bro.png"
              alt="Business professional"
              width={256}
              height={256}
              className="object-contain w-80 h-80"
            />
          </div>
          <div className="w-80">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">
              បុគ្គលិកកំពុងធ្វើការងារ
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              បុគ្គលិកដែលចង់មានបទពិសោធន៍ផ្នែកផ្សេងៗ និងដែលចង់ត្រូវនឹងជំនាញដែលខ្លួនកំពុងធ្វើ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
