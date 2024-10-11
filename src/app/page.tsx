
import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div>
       <Header />
      <main className="container mx-auto py-10">
        <section className="text-center bg-blue-200 p-10 rounded-lg shadow-lg h-screen">
          <h1 className="text-5xl font-bold text-red-500">Welcome to Pizza Delight!</h1>
          <p className="text-lg text-blue-500 mt-4">Discover the finest pizzas crafted with love and fresh ingredients.</p>
          <Link href="/flavours" className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">Explore Our Flavours</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;




      
  