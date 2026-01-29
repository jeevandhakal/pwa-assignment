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
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      console.log("Fetched Quote:", data);

      setQuote({
        text: data.quote,
        author: data.author
      });
    } catch (error) {
      console.error("CORS or Network Error:", error);
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