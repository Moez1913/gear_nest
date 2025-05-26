
const Banner = () => {
    return (
      <section>
        <div className="flex  bg-gray-100 py-16">
            <div className="bg-gray-400">
                <h1 className="">Welcome To Our Equipment Rental Service</h1>
                <p>Your one-stop solution for all your equipment needs.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img className="mask mask-parallelogram-4 h-[400px] w-[400px]" src="/assets/Gear_nestLogo.png" alt="" />
                
            </div>

        </div>

        <div className="flex  bg-gray-100 py-16">
            <div>
                <h1>Sport Is Importenr For Helth</h1>
                <p></p>
            </div>
            <div>
                <img className="mask mask-parallelogram-4 h-[400px] w-[400px]"  src="/assets/banner_1.jpg" alt="" />
            </div>
        </div>
      </section>
    );
};

export default Banner;