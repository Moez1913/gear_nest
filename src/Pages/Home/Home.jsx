

import Banner from './Banner';
import Equipments from './Equipments';

const Home = () => {
      
    return (
        <div>
          
           <Banner></Banner>
           <section className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Gear Nest</h1>
        <p className="text-lg md:text-xl mb-6">
          Your ultimate destination for top-quality sports equipment. Power up your game with confidence!
        </p>
        <button className="btn btn-secondary px-6">Explore Products</button>
      </div>
    </section>
   

          <div>
            <h1 className='text-3xl font-bold mb-8 text-gray-800'>Our Product</h1>
             <Equipments></Equipments>
          </div>
           <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Gear Nest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Top Quality</h3>
            <p className="text-gray-600">We provide gear made with cutting-edge materials, trusted by professionals worldwide.</p>
          </div>

          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Fast Delivery</h3>
            <p className="text-gray-600">Swift and secure delivery to ensure your game doesn’t stop.</p>
          </div>

          <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-primary">Customization</h3>
            <p className="text-gray-600">Add your personal touch to your favorite equipment — grip, size, and more.</p>
          </div>

        </div>
      </div>
    </section>
           
   
           
            </div>
      
    );
};

export default Home;