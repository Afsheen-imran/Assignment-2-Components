import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Flavours = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Our Pizza Flavours</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flavour-card text-center">
            <Image 
              src="https://storage.googleapis.com/fitia_public_images/recipes%2FGR-R-V-00015803_ikbz3za0x4fb5mrphlnbjgpv_large.jpg" 
              alt="Margherita Pizza" 
              className="w-full h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
              width={500} 
              height={500} 
            />
            <h3 className="text-xl font-semibold mt-4">Margherita Pizza</h3>
            <p>A classic favorite with fresh mozzarella and basil.</p>
          </div>
          <div className="flavour-card text-center">
            <Image 
              src="https://i0.wp.com/www.amysrecipebook.com/wp-content/uploads/2021/01/pepperonipizza-8-web.jpg?resize=1024%2C683&ssl=1.jpg" 
              alt="Pepperoni Pizza" 
              className="w-full h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
              width={500} 
              height={500} 
            />
            <h3 className="text-xl font-semibold mt-4">Pepperoni pizza</h3>
            <p>Loaded with spicy pepperoni slices and melted cheese.</p>
          </div>
          <div className="flavour-card text-center">
            <Image 
              src="https://kfoods.com/images1/newrecipeicon/barbeque-chicken-pizza_4950.jpg" 
              alt="Bar-B-Q Pizza" 
              className="w-full h-64 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              width={500} 
              height={500} 
            />
            <h3 className="text-xl font-semibold mt-4">Bar-B-Q</h3>
            <p>A delightful mix of fresh veggies for a healthy option.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Flavours;
