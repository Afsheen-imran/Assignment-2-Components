import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center mb-8">
          Welcome to Pizza Delight, where we believe in serving not just food but a delightful experience. Our pizzas are crafted with love, using only the freshest ingredients and traditional recipes to bring you the best flavors.
        </p>
        <p className="text-center mb-8">
          Established in 2023, Pizza Delight has become a favorite destination for pizza lovers in our community. Our team is passionate about creating delicious pizzas that cater to every taste, whether you prefer classic flavors or adventurous combinations.
        </p>
        <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to Quality</h2>
        <p className="text-center mb-8">
          At Pizza Delight, quality is our priority. We source our ingredients locally whenever possible, ensuring freshness and supporting our local farmers. Our dough is made fresh daily, and our sauces are prepared from scratch to deliver authentic taste in every bite.
        </p>
        <h2 className="text-3xl font-bold text-center mb-6">Join Us for a Slice!</h2>
        <p className="text-center mb-8">
          We invite you to visit our pizzeria and enjoy a slice of our delicious pizza. Whether it's a family gathering, a night out with friends, or a quick lunch, we have something for everyone. Experience the warmth of our welcoming atmosphere and the joy of sharing great food with great company.
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
            <h3 className="text-xl font-semibold mt-4">Meat lovers Pizza Meatza Pizza</h3>
          </div>
          <div className="text-center">
            <Image 
              src="https://slice-menu-assets-prod.imgix.net/47259/1674169083_c5fa3a6130?fit=crop&w=1500&h=937.jpg" 
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
              alt="Mediterranean Vegie Pizza Pizza" 
              className="w-full rounded-lg shadow-md" 
              width={400} 
              height={400} 
            />
            <h3 className="text-xl font-semibold mt-4">Mediterranean Vegie Pizza Pizza</h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
