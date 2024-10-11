
import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactUs = () => {
  return (
    <div>
      
      <div>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <form className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"></textarea>
          </div>
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300">Send Message</button>
        </form>
      </main>
      <Footer/>
    </div>
    </div>
  );
};

export default ContactUs;





