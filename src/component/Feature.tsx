// Define the types for the props
interface FeatureCardProps {
    image: string; // Path to the image
    title: string; // Title of the feature
    description: string; // Description of the feature
  }
export default function Feature() {
  return (
    <section className="max-w-8xl mx-auto lg:my-4 md:my-4 my-4">
        <div className="container px-4 lg:py-12 md:py-12 py-3">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center lg:mb-12 md:m-12 mb-4 text-textprimary">
            តើ<span className="text-emerald-500">នាំផ្លូវ</span>សម្រាប់អ្នកណា?
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-6 gap-0">
            {/* Feature 1: Student */}
            <FeatureCard
              image="../../assets/feature-01.png"
              title="សិស្សវិទ្យាល័យ"
              description="សិស្សនិស្សិតអាចស្វែងរកលើកិច្ចការ ចំណាប់អារម្មណ៍ខ្លួននិងជំនាញដែលខ្លួនចង់ធ្វើបន្តទៅ"
            />

            {/* Feature 2: Undergraduate */}
            <FeatureCard
              image="../../assets/feature-02.png"
              title="សិស្សសាកលវិទ្យាល័យ"
              description="សិស្សសកលនិស្សិតអាចរៀបចំ ស្វែងរកកំណត់ត្រូវដើម្បីនិស្សិតខ្លួន"
            />

            {/* Feature 3: Business Professional */}
            <FeatureCard
              image="../../assets/feature-03.png"
              title="បុគ្គលិកកំពុងធ្វើការងារ"
              description="បុគ្គលិកដែលចង់មានបទពិសោធន៍ផ្នែកផ្សេងៗ និងដែលចង់ត្រូវនឹងជំនាញដែលខ្លួនកំពុងធ្វើ"
            />
          </div>
        </div>
      </section>
  );
}

// Reusable FeatureCard Component
function FeatureCard({ image, title, description }: FeatureCardProps) {
    return (
      <div className="flex flex-col items-center text-center p-4 rounded-lg ">
        {/* Fixed-size Image Container */}
        <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]  mb-2">
          <img src={image} alt={title} width={200} height={200} className="object-contain w-full h-full" />
        </div>
        {/* Content */}
        <div className="lg:p-4 md:p-0 p-2 rounded-lg lg:w-90 md:w-78   w-full  ">
          <h2 className="lg:text-3xl md:text-3xl text-lg font-semibold mb-3 text-textprimary whitespace-nowrap">
            {title}
          </h2>
          <div className="md:text-lg text-md text-center lg:text-lg lg:w-[220px] md:w-[220px] w-[300px] text-textprimary  leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    );
  }