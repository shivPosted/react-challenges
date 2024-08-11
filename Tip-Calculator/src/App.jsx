import { useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState(0);
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
  return (
    <div className="container">
      <Bill handleBillChange={handleBillChange} billAmount={billAmount} />
      <Rating handleMyTip={handleMyTip}>
        <p>How did you like the service?</p>
      </Rating>
      <Rating handleFriendTip={handleFriendTip}>
        <p>How did your friend like the service?</p>
      </Rating>
      <TotalBillWithTip
        billAmount={billAmount}
        myTip={myTip}
        friendTip={friendTip}
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
        value={billAmount}
        onChange={e => handleBillChange(e.target.value)}
      />
    </>
  );
}

function Rating({ children, handleMyTip, handleFriendTip }) {
  return (
    <>
      {children}
      <select
        onChange={e => {
          handleMyTip
            ? handleMyTip(Number(e.target.value) / 100)
            : handleFriendTip(Number(e.target.value) / 100);
        }}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Ok(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </>
  );
}

function TotalBillWithTip({ billAmount, myTip, friendTip }) {
  if (!billAmount) return;
  const avgTip = Math.trunc(((myTip + friendTip) / 2) * billAmount);
  const totalBill = (Number(billAmount) + avgTip).toFixed(1);
  return (
    <h2>
      You pay ${totalBill}(${billAmount} + ${avgTip}tip )
    </h2>
  );
}
export default App;
