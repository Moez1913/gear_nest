import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <section className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        className="rounded-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-100 to-blue-300 p-8 md:p-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-800">Welcome To Our Equipment Rental Service</h1>
            <p className="text-lg md:text-xl text-blue-700 mb-6">Your one-stop solution for all your equipment needs.</p>
            <button className="btn btn-primary px-6 py-2 text-lg">Get Started</button>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/Gear_nestLogo.png"
              alt="GearNest Logo"
              className="h-56 w-56 md:h-80 md:w-80 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Slide 2 */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-100 to-green-300 p-8 md:p-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-green-800">Sports Are Important For Health</h1>
            <p className="text-lg md:text-xl text-green-700 mb-6">Stay active and healthy with the best sports gear.</p>
            <button className="btn btn-success px-6 py-2 text-lg">Explore Sports Gear</button>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/banner_1.jpg"
              alt="Sports Banner"
              className="h-56 w-56 md:h-80 md:w-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Slide 3 */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-100 to-purple-300 p-8 md:p-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-800">Rent. Use. Return. Repeat.</h1>
            <p className="text-lg md:text-xl text-purple-700 mb-6">Affordable, flexible, and eco-friendly equipment rental.</p>
            <button className="btn btn-secondary px-6 py-2 text-lg">See How It Works</button>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/banner_2.jpg"
              alt="Eco Friendly"
              className="h-56 w-56 md:h-80 md:w-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;