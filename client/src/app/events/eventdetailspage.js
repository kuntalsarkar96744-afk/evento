'use client';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // In real case, fetch from backend using id
    const dummyData = [
      {
        id: 1,
        title: 'Tech Conference 2025',
        date: 'August 15, 2025',
        description: 'A global gathering of top tech minds to discuss AI, Web3, and the future.',
        image: '/images/tech.jpeg',
        location: 'San Francisco, USA',
      },
      {
        id: 2,
        title: 'Summer Music Fest',
        date: 'September 2, 2025',
        description: 'Live performances by top artists in a beautiful open-air setting.',
        image: '/images/summer.webp',
        location: 'Goa, India',
      },
      // ... more
    ];
    const selectedEvent = dummyData.find((e) => e.id === parseInt(id));
    setEvent(selectedEvent);
  }, [id]);

  if (!event) {
    return <p className="text-center py-10">Loading event details...</p>;
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-xl shadow-md" />
      <h1 className="text-4xl font-bold text-indigo-700 mt-6">{event.title}</h1>
      <p className="text-gray-600 mt-2">{event.date}</p>
      <p className="mt-4 text-lg text-gray-800">{event.description}</p>
      <p className="mt-4 text-sm text-gray-500">📍 {event.location}</p>
    </main>
  );
}
