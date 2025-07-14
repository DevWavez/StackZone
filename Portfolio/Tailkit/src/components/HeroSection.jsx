const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
      <div className="relative flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="lg:w-1/2 lg:flex lg:items-center">
          <div>
            <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
              Next generation{" "}
              <span className="text-blue-600 dark:text-purple-500">
                website builder
              </span>
            </h1>
            <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
              Super fast and easy to use software to power your next idea or
              build your client’s web projects. Get it today and profit.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-purple-700 bg-purple-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <span>Create a Meeting</span>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
          <div className="relative mx-5 lg:w-96">
            <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-purple-900" />
            <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950" />
            <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-purple-900" />
            <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72 bg-tranparent border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950" />
            <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-800" />
            <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-blue-800 bg-opacity-75 shadow-inner dark:bg-purple-900 dark:bg-opacity-75" />
            <img
              src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="relative rounded-lg mx-auto shadow-lg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
