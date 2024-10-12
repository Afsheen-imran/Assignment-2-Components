import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">About Pizza Delight</h1>
        <p className="text-center mb-8">
          At Pizza Delight, we’re passionate about creating pizzas that not only taste amazing but also bring joy to our customers. Every pizza is crafted with the finest ingredients, combining traditional methods with new flavors to create a memorable dining experience.
        </p>
        <p className="text-center mb-8">
          Since our establishment in 2023, we’ve become a go-to destination for pizza lovers. Our commitment to quality and creativity has helped us stand out, and we take pride in serving pizzas that cater to all tastes, from classic to gourmet.
        </p>

        <h2 className="text-3xl font-bold text-center mb-6">Explore Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://cdn.pixabay.com/photo/2024/04/21/18/44/ai-generated-8711272_960_720.jpg" 
              alt="Classic Margherita Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold">Classic Margherita Pizza</h3>
            <p className="mt-2">A timeless favorite with a simple yet delicious combination of tomato, fresh mozzarella, and basil.</p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://cdn.pixabay.com/photo/2021/04/06/14/50/pizza-6156603_960_720.jpg" 
              alt="Spicy Pepperoni Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold">Spicy Pepperoni Pizza</h3>
            <p className="mt-2">A bold and zesty creation topped with spicy pepperoni, mozzarella, and tangy tomato sauce.</p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://cdn.pixabay.com/photo/2014/09/11/22/55/pizza-442058_960_720.jpg" 
              alt="Veggie Supreme Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={500}
              height={700}
            />
            <h3 className="text-xl font-semibold">Veggie Supreme Pizza</h3>
            <p className="mt-2">A garden of fresh vegetables on a crispy crust, topped with mozzarella and our signature tomato sauce.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://thumbs.dreamstime.com/z/bbq-chicken-pizza-black-background-picture-perfect-you-to-design-your-restaurant-menus-visit-my-page-will-be-able-117753135.jpg?ct=jpeg" 
              alt="BBQ Chicken Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold">BBQ Chicken Pizza</h3>
            <p className="mt-2">Tender grilled chicken, smoky BBQ sauce, red onions, and cilantro, all on a perfectly baked crust.</p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://cdn.pixabay.com/photo/2024/05/31/07/48/pizza-8800005_960_720.jpg" 
              alt=" Cheese Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold"> Cheese Pizza</h3>
            <p className="mt-2">A rich blend of mozzarella, cheddar, parmesan, and gouda, melted to perfection on a thin crust.</p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-lg">
            <Image 
              src="https://cdn.pixabay.com/photo/2020/09/14/15/13/pizza-5571248_960_720.jpg" 
              alt="Hawaiian Pizza" 
              className="w-full h-80 rounded-lg mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-xl font-semibold">Hawaiian Pizza</h3>
            <p className="mt-2">A sweet and savory delight with ham, pineapple, and mozzarella on a golden crust.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
