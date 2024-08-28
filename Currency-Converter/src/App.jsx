import { useEffect, useState } from 'react';

const host = 'api.frankfurter.app';

function App() {
  const [input, setInput] = useState('');
  const [convertFrom, setConvertFrom] = useState('USD');
  const [convertTo, setConvertTo] = useState('USD');
  const [output, setOutput] = useState(0);

  console.log(input, convertFrom, convertTo);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchConversions() {
      if (convertTo === convertFrom || input === 0) {
        setOutput(input);
      }
      try {
        const res = await fetch(
          `https://${host}/latest?amount=${input}&from=${convertFrom}&to=${convertTo}`,
          { signal: controller.signal }
        );
        console.log(res);

        if (!res.ok)
          throw new Error(`Failed: ${res.status}, ${res.statusText}`);

        const {
          rates: { [convertTo]: rate },
        } = await res.json();

        setOutput(rate.toFixed(2));
      } catch (err) {
        console.error(err);
      }
    }

    fetchConversions();

    return () => {
      controller.abort();
    };
  }, [input, convertFrom, convertTo]);

  return (
    <div className="main">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <select
        value={convertFrom}
        onChange={e => setConvertFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={convertTo} onChange={e => setConvertTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}

export default App;
