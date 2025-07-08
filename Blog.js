import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-rose-600">Organization Tips & Hacks</h2>
      <article className="mb-6">
        <h3 className="text-xl font-semibold">How to Declutter in 15 Minutes a Day</h3>
        <p className="text-sm mt-2">Break tasks into small, achievable wins. Start with a single drawer or counter space and build momentum!</p>
      </article>
      <article>
        <h3 className="text-xl font-semibold">Best Storage Bins on Amazon (2025)</h3>
        <p className="text-sm mt-2">These are our favorite bins that are both affordable and stackable. See our top picks with links!</p>
      </article>
    </div>
  );
}
