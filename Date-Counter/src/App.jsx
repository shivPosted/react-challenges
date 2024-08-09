import { useState } from 'react';

// const daysOfWeek = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// const monthsOfYear = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // function handleStpePlus() {
  //   setStep(cur => cur + 1);
  // }
  // function handleStpeMinus() {
  //   setStep(cur => {
  //     if (cur === 1) return cur;
  //     return cur - 1;
  //   });
  // }

  function handleStepChange(val) {
    setStep(val);
  }

  function handleCountChange(val) {
    setCount(val === 0 ? '' : val);
  }

  function handleCountPlus() {
    setCount(cur => cur + step);
  }
  function handleCountMinus() {
    setCount(cur => cur - step);
  }
  function handleReset() {
    setStep(1);
    setCount(0);
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
      <Step step={step} handleStepChange={handleStepChange} />
      <Counter
        count={count}
        handleCountMinus={handleCountMinus}
        handleCountPlus={handleCountPlus}
        handleCountChange={handleCountChange}
      />

      <DateComponent step={step} count={count} />
      {count !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

function Step({ step, handleStepChange }) {
  return (
    <div
      className="stepper"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <button onClick={handleStpeMinus}>-</button> */}
      <input
        type="range"
        value={step}
        min={1}
        max={10}
        onChange={e => {
          handleStepChange(Number(e.target.value));
        }}
      />
      <p style={{ marginInline: '0.6rem' }}>Step: {step} </p>
      {/* <button onClick={handleStpePlus}>+</button> */}
    </div>
  );
}

function Counter({
  count,
  handleCountPlus,
  handleCountMinus,
  handleCountChange,
}) {
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
      <input
        type="number"
        value={count}
        onChange={e => handleCountChange(Number(e.target.value))}
        placeholder="type days..."
        style={{ marginInline: '0.6rem' }}
      />
      <button onClick={handleCountPlus}>+</button>
    </div>
  );
}

function DateComponent({ count }) {
  const ms = count * 24 * 60 * 60 * 1000;
  const timestamp = Date.now();
  const date = new Date(timestamp + ms);
  // const day = daysOfWeek[date.getDay()];
  // const month = monthsOfYear[date.getMonth()];
  // const dateString = `${day} ${date.getDate()}  ${month} ${date.getFullYear()}`;
  const dateString = date.toDateString();
  return (
    <p>
      {count === 0 || count === ''
        ? `Toaday is ${dateString}`
        : count > 0
        ? `${count} days from today will be ${dateString}`
        : `${count} day ago would have been ${dateString}`}
    </p>
  );
}
export default App;
