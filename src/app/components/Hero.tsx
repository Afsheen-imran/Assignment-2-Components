import React from 'react'

const Hero = () => {
  return (
    <div>
    
    <section className="hero bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: `url('/images/pizza-hero.jpg')` }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold">Pizza Made with Love</h1>
        <p className="mt-4 text-xl">Satisfy your cravings with our handcrafted pizzas, made from the freshest ingredients.</p>
        <a href="/flavours" className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">Explore Flavours</a>
      </div>
    </section>

    </div>
  );
};

export default Hero;

