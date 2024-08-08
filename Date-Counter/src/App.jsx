import { useState } from 'react';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleStpePlus() {
    setStep(cur => cur + 1);
  }
  function handleStpeMinus() {
    setStep(cur => {
      if (cur === 1) return cur;
      return cur - 1;
    });
  }
  function handleCountPlus() {
    setCount(cur => cur + step);
  }
  function handleCountMinus() {
    setCount(cur => cur - step);
  }
  return (
    <div
      className="container"
      style={{
        maxWidth: '40rem',
        margin: '12rem auto 0 auto',
        textAlign: 'center',
        scale: '1.5',
      }}
    >
      <Step
        step={step}
        handleStpeMinus={handleStpeMinus}
        handleStpePlus={handleStpePlus}
      />
      <Counter
        count={count}
        handleCountMinus={handleCountMinus}
        handleCountPlus={handleCountPlus}
      />

      <DateComponent step={step} count={count} />
    </div>
  );
}

function Step({ step, handleStpePlus, handleStpeMinus }) {
  return (
    <div
      className="stepper"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleStpeMinus}>-</button>
      <p style={{ marginInline: '0.6rem' }}> Step: {step} </p>
      <button onClick={handleStpePlus}>+</button>
    </div>
  );
}

function Counter({ count, handleCountPlus, handleCountMinus }) {
  return (
    <div
      className="counter"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleCountMinus}>-</button>
      <p style={{ marginInline: '0.6rem' }}>Count: {count}</p>
      <button onClick={handleCountPlus}>+</button>
    </div>
  );
}

function DateComponent({ count }) {
  const ms = count * 24 * 60 * 60 * 1000;
  const timestamp = Date.now();
  const date = new Date(timestamp + ms);
  const day = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dateString = `${day} ${date.getDate()}  ${month} ${date.getFullYear()}`;
  return (
    <p>
      {count === 0
        ? `Toaday is ${dateString}`
        : count > 0
        ? `${count} days from today will be ${dateString}`
        : `${count} day ago would have been ${dateString}`}
    </p>
  );
}
export default App;
