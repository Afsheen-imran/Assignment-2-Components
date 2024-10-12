import React from 'react';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer'
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main className="container mx-auto py-10">
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center mb-8">
            Welcome to Pizza Delight, where we believe in serving not just food but a delightful experience. Our pizzas are crafted with love, using only the freshest ingredients and traditional recipes to bring you the best flavors.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Our Flavours</h2>
          <p className="text-center mb-8">
            Explore our variety of delicious pizzas, from classic cheese to adventurous combinations, all crafted with the finest ingredients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Image 
                src="https://slice-menu-assets-prod.imgix.net/47259/1627629352_2b62ffa2d4?fit=crop&w=1500&h=937.jpg" 
                alt="Delicious Cheese Pizza" 
                className="w-full rounded-lg shadow-md" 
                width={400} 
                height={400} 
              />
              <h3 className="text-xl font-semibold mt-4">Delicious Cheese Pizza</h3>
            </div>
            <div className="text-center">
              <Image 
                src="https://slice-menu-assets-prod.imgix.net/47259/1627629464_c0e40ef112?fit=crop&w=1500&h=937.jpg"
                alt="Meat lovers Pizza Meatza Pizza" 
                className="w-full rounded-lg shadow-md" 
                width={400} 
                height={400} 
              />
              <h3 className="text-xl font-semibold mt-4">Meat Lovers Pizza</h3>
            </div>
            <div className="text-center">
              <Image 
                src="https://cdn.pixabay.com/photo/2020/04/01/16/34/pepperoni-4991789_960_720.jpg" 
                alt="Pepperoni Pizza" 
                className="w-full rounded-lg shadow-md" 
                width={400} 
                height={400} 
              />
              <h3 className="text-xl font-semibold mt-4">Pepperoni Pizza</h3>
            </div>
            <div className="text-center">
              <Image 
                src="https://slice-menu-assets-prod.imgix.net/47259/1622713299_403088e921?fit=crop&w=1500&h=937.jpg" 
                alt="Mediterranean Veggie Pizza" 
                className="w-full rounded-lg shadow-md" 
                width={400} 
                height={400} 
              />
              <h3 className="text-xl font-semibold mt-4">Mediterranean Veggie Pizza</h3>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us for a Slice!</h2>
          <p className="mb-8">
            We invite you to visit our pizzeria and enjoy a slice of our delicious pizza. Experience the warmth of our welcoming atmosphere and the joy of sharing great food with great company.
          </p>
          <a href="/flavours" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Explore Flavours
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
