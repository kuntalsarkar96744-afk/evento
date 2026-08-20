'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
const router = useRouter()
 const userRef = useRef(null);
 const passRef = useRef(null);
  const checkUserLogin = async(e)=>{
    try {
      e.preventDefault();
      if(userRef.current && passRef.current){
       const username  = userRef.current.value;
       const password = passRef.current.value;
       const response = await fetch(`http://localhost:3001/login?username=${username}&password=${password}`);
       if(response.ok){
        router.push('/components/dashboard');
       }else{
        console.log("username or password is wrong");
       }
      // console.log(username, password);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to Evento';
  const typingSpeed = 100;
  const pauseDuration = 1500;

  const [currentImage, setCurrentImage] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const images = ['/images/event1.jpg', '/images/event2.avif', '/images/event3.jpg'];

  const featuredEvents = [
    {
      id: 1,
      title: 'United in Love',
      description: 'A joyful celebration of love as we begin our journey together.',
      image: '/images/event2.avif',
    },
    {
      id: 2,
      title: 'Birthday Bash',
      description: 'Celebrate with us—good vibes, great company, and birthday cheer!',
      image: '/images/event3.jpg',
    },
    {
      id: 3,
      title: 'Melody Night',
      description: 'An unforgettable night of music, energy, and pure vibes—join us and feel the beat!',
      image: '/images/event4.webp',
    },
  ];

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const type = () => {
      setTypedText((prev) =>
        !isDeleting
          ? fullText.substring(0, index + 1)
          : fullText.substring(0, index - 1)
      );

      if (!isDeleting) {
        index++;
        if (index === fullText.length + 1) {
          isDeleting = true;
          setTimeout(type, pauseDuration);
          return;
        }
      } else {
        index--;
        if (index < 0) {
          isDeleting = false;
          setTimeout(type, typingSpeed);
          return;
        }
      }

      setTimeout(type, typingSpeed);
    };

    const timeoutId = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
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

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start pl-[30%] pr-[10%]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-white text-left">
          <h1 className="text-5xl font-bold mb-4">
            {typedText.includes('Evento') ? (
              <>
                {typedText.replace('Evento', '')}
                <span className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Evento
                </span>
              </>
            ) : (
              typedText
            )}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl mb-6 max-w-xl">
            Discover and manage events effortlessly. Plan, promote, and participate in events that inspire.
          </p>
          <a
            href="/events"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
          >
            Browse Events
          </a>
        </div>
      </section>

      {/* Featured Events Flip Cards */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredEvents.map((event) => (
            <div key={event.id} className="group perspective w-full h-72">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-xl w-full h-full object-cover shadow-xl"
                  />
                </div>
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white rounded-xl shadow-xl flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a href="/events" className="text-indigo-600 font-semibold hover:underline">Learn More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* About */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Evento?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-10">
          Evento simplifies event planning and participation. Whether you're an organizer or an attendee, we make it seamless and memorable.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">For Organizers</h4>
            <p>Easy tools to create, manage, and promote your events.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">For Attendees</h4>
            <p>Discover upcoming events and reserve your spot instantly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Events?</h2>
        <a href="/events" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition">
          View Events
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 perspective-[1000px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="transform rotate-y-3 hover:rotate-y-0 transition duration-700">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Evento's Newsletter</h2>
            <p className="text-sm mb-4">Receive expert insights, product news, customer stories and inspirational content.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!searchInput) return;
                alert(`Subscribed with: ${searchInput}`);
                setSearchInput('');
              }}
            >
              <input
                type="email"
                placeholder="name@company.com"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-white text-black placeholder-black mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <p className="text-xs text-gray-400 mb-4">
                By clicking on “Submit”, you agree to our <a className="underline" href="#">privacy policy</a>.
              </p>
              <button
                type="submit"
                className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-white hover:scale-105 transition transform duration-300 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="transform rotate-y-3 hover:rotate-y-0 transition duration-700">
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

          {/* Platform */}
          <div className="transform hover:-translate-y-2 transition duration-500">
            <h3 className="font-semibold mb-2 text-lg">PLATFORM</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>Event Management Software</li>
              <li>Event Registration Software</li>
              <li>Event Marketing</li>
              <li>Event Data & Analytics</li>
              <li>On-site Check-in</li>
              <li>Event App</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="transform hover:-translate-y-2 transition duration-500">
            <h3 className="font-semibold mb-2 text-lg">RESOURCES</h3>
            <ul className="text-sm space-y-1 text-gray-300">
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

      {/* 3D Cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 via-pink-400 to-purple-500 opacity-80 shadow-lg transform-gpu transition-transform duration-100"
        style={{
          transform: `translate3d(${cursorPosition.x - 20}px, ${cursorPosition.y - 20}px, 0) scale(1.05) rotateX(20deg) rotateY(20deg)`,
          backdropFilter: 'blur(4px)',
          mixBlendMode: 'screen',
        }}
      ></div> 
    </main>
  );
}
