'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the form data
    console.log('Submitted Data:', formData);

    // Reset form and show success
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);

    // Optional: you could integrate with a backend API or email service here
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-8xl mx-auto">
          {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-300 text-white px-4 py-1 rounded shadow-lg">
            Evento
          </div>
                  <nav className="flex gap-4 items-center">
  {[
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Demo', href: '/demo' },
    { name: 'login', href: '/components/login' },
     { name: 'signup', href: '/components/signup' },
  ].map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="px-4 py-2 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:brightness-110 transition shadow-md"
    >
      {link.name}
    </a>
  ))}
</nav>
        </div>
      </header>

        {/* Heading */}
                <section className="text-center py-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
           
          </p>
        </section>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-12 pb-16">
          {/* Contact Form */}
          <form
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your event or inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 font-medium">Message sent successfully!</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6 px-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2 text-indigo-600">Get in Touch</h2>
              <p>Email: kuntalsarkar96744@gmail.com</p>
              <p>Phone: +91 9674427575</p>
              <p>Email: anuragduttao53@gmail.com</p>
              <p>Phone: +91 8900661151</p>
              <p>Email: bardhanmahima@gmail.com</p>
              <p>Phone: +91 6291621403</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2 text-indigo-600">Our Location</h2>
              <p>Evento HQ</p>
              <p>123 Event Street, Kolkata, West Bengal</p>
              <p>India, 700001</p>
            </div>

            <div className="overflow-hidden rounded-lg">
              <iframe
                className="w-full h-56"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.160905733886!2d88.36389521495863!3d22.572646885180225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b4b3d7f99d%3A0x3d303e37d09d0a94!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Subscribe to Evento's Newsletter</h2>
            <p className="text-sm mb-4">
              Receive expert insights, product news, customer stories and inspirational content.
            </p>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-500 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-xs text-white mb-4">
              By clicking on “Submit”, you agree to our <a className="underline" href="#">privacy policy</a>.
            </p>
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-white transition"
            >
              Submit
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-white text-2xl">
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp hover:text-green-400 transition" />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram hover:text-pink-400 transition" />
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">PLATFORM</h3>
            <ul className="text-sm space-y-1">
              <li>Event Management Software</li>
              <li>Event Registration Software</li>
              <li>Event Marketing</li>
              <li>Event Data & Analytics</li>
              <li>On-site Check-in</li>
              <li>Event App</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">RESOURCES</h3>
            <ul className="text-sm space-y-1">
              <li>Pricing</li>
              <li>Blog Articles</li>
              <li>Case Studies</li>
              <li>Knowledge Base</li>
              <li>About Evento</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 Evento | Terms of service | Privacy Policy | Security | Sitemap
        </div>
      </footer>
    </main>
  );
}
