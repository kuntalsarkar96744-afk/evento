'use client';
import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Evento Bot. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const reply = getBotReply(input);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);

    setInput('');
  };

  const getBotReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('event')) return 'You can browse our events on the Events page.';
    if (lower.includes('contact')) return 'Please visit the Contact Us page to get in touch!';
    if (lower.includes('about')) return 'We are Evento, your event management partner.';
    return "I'm sorry, I didn't understand that. Try asking about Events, Contact, or About Us.";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <a href="/chatbot" className="hover:text-indigo-600">Chatbot</a>

        <div className="bg-indigo-600 text-white px-6 py-4 flex items-center gap-2">
          <FaRobot />
          <h2 className="text-lg font-semibold">Evento Chatbot</h2>
        </div>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 h-96 bg-white">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg shadow text-sm ${
                  msg.sender === 'user'
                    ? 'bg-indigo-100 text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                {msg.sender === 'user' ? (
                  <div className="flex items-center justify-end gap-2">
                    <span>{msg.text}</span>
                    <FaUser className="text-indigo-500" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaRobot className="text-gray-500" />
                    <span>{msg.text}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-4 border-t bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </main>
  );
}
