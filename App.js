import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './Blog';

function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-rose-600">Tidy Life, Happy Home</h1>
        <p className="text-lg mt-2">Your go-to guide for decluttering and home organization — featuring our favorite affiliate finds!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-2xl shadow-md p-4 border hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Top Amazon Organizers</h2>
          <p className="text-sm mb-4">Check out our top 5 Amazon products for a clutter-free home — bins, baskets, and more!</p>
          <a
            href="https://www.amazon.com"
            className="text-rose-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Product List →
          </a>
        </article>

        <article className="rounded-2xl shadow-md p-4 border hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">30-Day Declutter Challenge</h2>
          <p className="text-sm mb-4">Download our free printable kit to start organizing your home in just 15 minutes a day.</p>
          <a
            href="/downloads/declutter-challenge-kit.pdf"
            className="text-rose-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now →
          </a>
        </article>

        <article className="rounded-2xl shadow-md p-4 border hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Blog: Tips & Hacks</h2>
          <p className="text-sm mb-4">Explore bite-sized organization hacks for the kitchen, closet, and more. Updated weekly!</p>
          <Link to="/blog" className="text-rose-500 hover:underline">
            Visit Blog →
          </Link>
        </article>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>&copy; 2025 Shannon Gephart. Affiliate links may earn a small commission at no extra cost to you.</p>
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
