import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?w=740&t=st=1728759962~exp=1728760562~hmac=37891cb7e4ce95f29adaae0361587613302d77e32c1fd136e911a319f47d07ad.jpg')`,
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-4 rounded-2xl">
          <h1 className="text-6xl font-bold">Pizza Made with Love</h1>
          <p className="mt-4  text-xl">
            Satisfy your cravings with our handcrafted pizzas, made from the freshest ingredients.
          </p>
          <Link href="/flavours" className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Explore Flavours
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
