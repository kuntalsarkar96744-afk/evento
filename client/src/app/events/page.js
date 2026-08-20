'use client';
import { useState } from 'react';

export default function EventPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  

  const events = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'August 15, 2025',
      description:
        'A global gathering of top tech minds to discuss AI, Web3, and the future.',
      image: '/images/tech.jpeg',
    },
    {
      id: 2,
      title: 'Music Fiesta',
      date: 'September 1, 2025',
      description:
        'An electrifying music festival featuring top bands and solo artists.',
      image: '/images/event4.webp',
    },
    {
      id: 3,
      title: 'Startup Showcase',
      date: 'October 10, 2025',
      description:
        'A vibrant gathering where founders and innovators present bold new ideas.',
      image: '/images/startup.jpg',
    },
     {
      id: 4,
      title: 'Cultural Celebration',
      date: 'October 10, 2025',
      description:'A joyful celebration of traditions, community and unforgettable moments.',
      image: '/images/event2.avif',
    },
    {
      id: 5,
      title: 'Elegant Venue Experience',
      date: 'October 10, 2025',
      description:'A beautifully designed venue experience for celebrations, gatherings and special occasions.',
      image: '/images/event1.jpg',
    },
    {
      id: 6,
      title: 'Birthday Bash',
      date: 'October 10, 2025',
      description:'A birthday party is a celebratory gathering to commemorate an individuals birth, typically featuring gifts, cake, food, and social activities with friends and family.',
      image: '/images/event3.jpg',
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the latest and greatest events happening around you. Be part of the experience!
          </p>
        </section>

       {/* 3D Search */}
<section className="px-50 mt-5 max-w-4xl mx-auto">
  <div className="flex items-center gap-4 bg-gradient-to-br from-indigo-500 to-gray-100 p-4 rounded-xl shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#fff]">
    <input
      type="text"
      placeholder="Search events..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="flex-grow px-3 py-3 text-black rounded-lg bg-gradient-to-br from-white to-white shadow-[2px_2px_6px_rgba(0,0,0,0.15),-2px_-2px_6px_#fff] border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-black transition"
    />
    
  </div>
</section>


        {/* Events */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {selectedEvent ? (
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Close
                </button>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-bold text-indigo-700 mb-2">{selectedEvent.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{selectedEvent.date}</p>
                <p className="text-gray-700 text-base">{selectedEvent.description}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-indigo-700">{event.title}</h3>
                        <p className="text-gray-500 text-sm mt-1 mb-3">{event.date}</p>
                        <p className="text-gray-700 text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full mt-10 text-lg">
                    No events found.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

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

      </div>
    </main>
  );
}
