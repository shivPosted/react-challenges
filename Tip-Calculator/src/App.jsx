import { useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillChange(value) {
    setBillAmount(value);
  }

  function handleMyTip(value) {
    setMyTip(value);
  }

  function handleFriendTip(value) {
    setFriendTip(value);
  }

  function handleReset() {
    setBillAmount('');
    setMyTip(0);
    setFriendTip(0);
  }
  return (
    <div
      className="container"
      style={{
        maxWidth: '30rem',
        margin: '4rem auto',
        transform: 'scale(1.25)',
      }}
    >
      <Bill handleBillChange={handleBillChange} billAmount={billAmount} />
      <Rating onTipChange={handleMyTip} tip={myTip}>
        <p>How did you like the service?</p>
      </Rating>
      <Rating onTipChange={handleFriendTip} tip={friendTip}>
        <p>How did your friend like the service?</p>
      </Rating>
      <TotalBillWithTip
        billAmount={billAmount}
        myTip={myTip}
        friendTip={friendTip}
        handleReset={handleReset}
      />
    </div>
  );
}
function Bill({ handleBillChange, billAmount }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="number"
        placeholder="Bill Amount..."
        value={billAmount}
        onChange={e => handleBillChange(e.target.value)}
      />
    </>
  );
}

function Rating({ children, onTipChange, tip }) {
  return (
    <>
      {children}
      <select
        onChange={e => {
          onTipChange(Number(e.target.value));
        }}
        value={tip}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Ok(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </>
  );
}

function TotalBillWithTip({ billAmount, myTip, friendTip, handleReset }) {
  if (!billAmount) return;
  const tipPercentage = (myTip + friendTip) / 100;
  const avgTip = Math.trunc((tipPercentage / 2) * billAmount);
  const totalBill = (Number(billAmount) + avgTip).toFixed(1);
  return (
    <>
      <Reset handleReset={handleReset} />
      <h2>
        You pay ${totalBill}(${billAmount} + ${avgTip}tip )
      </h2>
    </>
  );
}

function Reset({ handleReset }) {
  return (
    <button
      className="reset-btn"
      onClick={handleReset}
      style={{ marginLeft: '4.8rem' }}
    >
      Reset
    </button>
  );
}
export default App;
