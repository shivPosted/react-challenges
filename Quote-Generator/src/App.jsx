import { useState } from 'react';
import './style.css';

async function generateQuote() {
  try {
    const res = await fetch('https://type.fit/api/quotes');
    if (!res.ok) throw new Error("Can't generate quote. Please Try Again.");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

const quoteArr = await generateQuote();
console.log(quoteArr);

function App() {
  const [quoteNo, setQuoteNo] = useState(0);

  return (
    <div className="main">
      <p className="quote">{quoteArr[quoteNo].text}</p>
      <h5 className="author">
        &mdash; {quoteArr[quoteNo].author.split(',')[0]}
      </h5>
      <button
        onClick={() => {
          const random = Math.trunc(Math.random() * quoteArr.length);
          setQuoteNo(random);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
