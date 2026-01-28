import React, { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

const QuoteDisplay: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      // Using type.fit as it's reliable for client-side fetches
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      
      // The API returns an array, so we pick a random one
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedQuote = data[randomIndex];
      
      setQuote({
        text: selectedQuote.text,
        author: selectedQuote.author || "Unknown"
      });
    } catch (error) {
      console.error("Error fetching quote:", error);
      // Fallback if API fails (important for the offline requirement!)
      setQuote({
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) return <p>Loading inspiration...</p>;

  return (
    <section style={{ border: '1px solid #ddd', padding: '15px', margin: '20px 0', borderRadius: '8px' }}>
      <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
        "{quote?.text}"
      </blockquote>
      <p style={{ textAlign: 'right' }}>— {quote?.author}</p>
    </section>
  );
};

export default QuoteDisplay;