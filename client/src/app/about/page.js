export default function about() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
        {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
           
          </p>
        </section>
      <section className="py-10 px-8 max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Mission Section */}
          <div className="md:w-1/2">
            <img src="/images/startup.jpg" alt="Our Mission" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-5xl font-semibold mb-4 text-indigo-600">Driven By A Good Vision</h2>
            <p className="text-lg text-gray-700">
              Our vision is to establish ourselves as the foremost event management company in India, dedicated to crafting experiences that etch cherished memories into the tapestry of your life. We aspire to create impactful and transformational events that not only celebrate your success but also translate it into tangible value. Our commitment is to consistently meet and exceed your expectations, fueled by a combination of excellent ideas and flawless execution. We envision a future where every event we undertake becomes a milestone in your journey, leaving an indelible mark on your memory lane that lasts a lifetime.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mt-16">
          {/* Vision Section */}
          <div className="md:w-1/2">
            <img src="/images/smritilogo.jpg" alt="Our Vision" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-5xl font-semibold mb-4 text-indigo-600">What We Do?</h2>
            <p className="text-lg text-gray-700">
              We specialize in creating award-winning events, positioning ourselves among the top event planning companies in the country. As your comprehensive event planner, we serve as your go-to resource for all your significant occasions. Our approach involves starting from scratch, meticulously crafting a unique blueprint tailored to your specific needs. With our unwavering commitment, we provide 24/7 assistance to ensure every detail is seamlessly executed. Our overarching mission is to transform your dream into a reality, making your aspirations our guiding purpose in every event we undertake
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Subscribe to Evento's Newsletter</h2>
            <p className="text-sm mb-4">Receive expert insights, product news, customer stories and inspirational content.</p>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-2 rounded bg-white placeholder-black text-black mb-2"
            />
            <p className="text-xs text-gray-400 mb-4">
              By clicking on “Submit”, you agree to our <a className="underline" href="#">privacy policy</a>.
            </p>
            <button className="bg-white text-black px-4 py-2 placeholder-white rounded hover:bg-white transition">Submit</button>
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
